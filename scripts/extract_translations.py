# -*- coding: utf-8 -*-
"""Extract translations and cvDownloads from index.html into js/data/translations.js"""
import os
import re

base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html_path = os.path.join(base, 'index.html')
out_path = os.path.join(base, 'js', 'data', 'translations.js')

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find script content: from "const translations = {" to "</script>"
start = content.find('const translations = {')
if start == -1:
    raise SystemExit('Could not find "const translations = {" in index.html')
end_script = content.find('</script>', start)
if end_script == -1:
    raise SystemExit('Could not find </script>')
script_block = content[start:end_script].strip()

# Replace "const translations = " with "export const translations = "
script_block = script_block.replace('const translations = ', 'export const translations = ', 1)
# Replace "const cvDownloads = " with "export const cvDownloads = "
script_block = script_block.replace('const cvDownloads = ', 'export const cvDownloads = ', 1)

os.makedirs(os.path.dirname(out_path), exist_ok=True)
with open(out_path, 'w', encoding='utf-8') as f:
    f.write('/**\n * Translations and CV download paths. Extracted from index.html.\n */\n\n')
    f.write(script_block)
    f.write('\n')

print('Wrote', out_path)
