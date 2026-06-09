#!/bin/pwsh
# SEO Audit Script - Check all metadata

$layoutFiles = Get-ChildItem -Path "app" -Recurse -Include "layout.tsx" -File

$results = @()

foreach ($file in $layoutFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Extract title
    $titleMatch = [regex]::Match($content, 'title:\s*["\x60]([^"\x60]*)["\x60]')
    $title = if ($titleMatch.Success) { $titleMatch.Groups[1].Value } else { "MISSING" }
    
    # Extract description
    $descMatch = [regex]::Match($content, 'description:\s*["\x60]([^"\x60]*)["\x60]')
    $description = if ($descMatch.Success) { $descMatch.Groups[1].Value } else { "MISSING" }
    
    # Extract canonical
    $canonicalMatch = [regex]::Match($content, 'canonical:\s*["\x60]([^"\x60]*)["\x60]')
    $canonical = if ($canonicalMatch.Success) { $canonicalMatch.Groups[1].Value } else { "MISSING" }
    
    # Calculate lengths
    $titleLen = $title.Length
    $descLen = $description.Length
    $titleOK = if ($titleLen -gt 0 -and $titleLen -le 60) { "✅" } else { "❌" }
    $descOK = if ($descLen -gt 0 -and $descLen -le 160) { "✅" } else { "❌" }
    $canonicalOK = if ($canonical -ne "MISSING") { "✅" } else { "❌" }
    
    $results += @{
        Path = $file.FullName.Replace($file.Root.FullName, "").TrimStart("\")
        Title = $title
        TitleLen = $titleLen
        TitleOK = $titleOK
        Description = $description
        DescLen = $descLen
        DescOK = $descOK
        Canonical = $canonical
        CanonicalOK = $canonicalOK
    }
}

# Output results
$results | Format-Table -Property Path, TitleOK, DescOK, CanonicalOK -AutoSize

# Summary
Write-Host "`n=== SUMMARY ===" -ForegroundColor Green
$titleIssues = $results | Where-Object { $_.TitleOK -eq "❌" }
$descIssues = $results | Where-Object { $_.DescOK -eq "❌" }
$canonicalIssues = $results | Where-Object { $_.CanonicalOK -eq "❌" }

Write-Host "Titles < 60 chars: $(($results | Where-Object { $_.TitleLen -le 60 }).Count)/$(($results).Count)"
Write-Host "Descriptions < 160 chars: $(($results | Where-Object { $_.DescLen -le 160 }).Count)/$(($results).Count)"
Write-Host "Canonical URLs present: $(($results | Where-Object { $_.CanonicalOK -eq '✅' }).Count)/$(($results).Count)"

if ($titleIssues.Count -gt 0) {
    Write-Host "`nTitles with issues:" -ForegroundColor Yellow
    $titleIssues | ForEach-Object { Write-Host "  $($_.Path): $($_.TitleLen) chars" }
}

if ($descIssues.Count -gt 0) {
    Write-Host "`nDescriptions with issues:" -ForegroundColor Yellow
    $descIssues | ForEach-Object { Write-Host "  $($_.Path): $($_.DescLen) chars" }
}
