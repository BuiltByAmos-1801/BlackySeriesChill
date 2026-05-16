from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1]
source_dir = root / "src" / "images"
output_dir = source_dir / "webp"
output_dir.mkdir(exist_ok=True)

files = [
    "logo.jpeg",
    "Sadiq_Khan.JPG.jpeg",
    "The Opening New Song Vol.1 Album Cover Music Instagram Post_20250515_154719_0000.jpg.jpeg",
    "Brown and Green Simple Music Mix YouTube Thumbnail_20250125_235643_0000.jpg.jpeg",
    "Blue & White Minimal Travel Vlog  YouTube Thumbnail_20251020_111120_0000.jpg.jpeg",
    "DSC_0056.JPG.jpeg",
    "DSC_0063.JPG.jpeg",
    "IMG_1918.JPG.jpeg",
    "SnapInsta.to_476368469_18015294890673477_2404260687870154797_n.jpg.jpg.jpeg",
    "Screenshot_2025-10-20-11-05-04-93_92460851df6f172a4592fca41cc2d2e6.jpg.jpeg",
    "Screenshot_2025-10-20-11-05-21-76_92460851df6f172a4592fca41cc2d2e6.jpg.jpeg",
    "Screenshot_2025-10-20-11-05-46-42_92460851df6f172a4592fca41cc2d2e6.jpg.jpeg",
]

for filename in files:
    source = source_dir / filename
    target = output_dir / f"{source.stem}.webp"
    with Image.open(source) as image:
        image = image.convert("RGB")
        image.thumbnail((1400, 1400), Image.Resampling.LANCZOS)
        image.save(target, "WEBP", quality=78, method=6)
        print(f"{source.name} -> {target.name}")
