# Movara — Assets Folder

Place your project assets here, organized by type:

## 📁 `cad/`
CAD renders and screenshots exported from SOLIDWORKS.

| File to add           | Used on page | Description                        |
|-----------------------|--------------|------------------------------------|
| `overview.png`        | Page 1       | Full assembly isometric view       |
| `lateral.png`         | Page 1       | Lateral slide mechanism            |
| `rotation.png`        | Page 1       | Rotation joint detail              |
| `elevation.png`       | Page 1       | Elevation linkage system           |
| `seat.png`            | Page 1       | Seat surface and frame interface   |
| `exploded.png`        | Page 1       | Exploded view of all components    |

## 📁 `photos/`
Real photos of your prototype or working environment.

| File to add      | Used on page | Description                    |
|------------------|--------------|--------------------------------|
| `origin.jpg`     | Page 2       | Early sketches / notes / setup |

## 📁 `diagrams/`
Technical diagrams: free body diagrams, ideation sketches, etc.

| File to add          | Used on page | Description                        |
|----------------------|--------------|------------------------------------|
| `ideation.jpg`       | Page 3       | Ideation sketches / concept drawings |
| `fbd_full.png`       | Page 4       | FBD: Full assembly seated load case  |
| `fbd_rail.png`       | Page 4       | FBD: Lateral rail transfer load      |
| `fbd_linkage.png`    | Page 4       | FBD: Elevation linkage compression   |

## 📁 `icons/`
Reserved for any custom icon assets.

---
> **Note:** The website gracefully shows a placeholder if an image file is missing.
> Drop the correctly named file in the right subfolder and refresh — it will appear automatically.
> You can also update the `src` paths in the corresponding `data/pageN.json` file if you want to use different filenames.
