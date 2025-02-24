# Raster

**Simple CSS Grid System**

Raster is a minimal and straightforward CSS grid system that utilizes descriptive HTML rather than semantic CSS, enabling developers to create responsive and harmonious web layouts with ease.

## Features

- **Simplicity First**: Define grids using the `<r-grid>` element with a specified number of columns. Customize cell spans with the `span` attribute.
- **Responsive Design**: Use `span-s` and `columns-s` attributes to define alternate layouts for small screens, and `span-l` and `columns-l` for large screens.
- **Pure CSS**: Raster is built entirely with CSS, eliminating the need for JavaScript dependencies.
- **Customization**: Easily adjust typography and spacing through CSS variables, such as `--fontSize` and `--lineHeight`.

## Getting Started

Include the Raster CSS in your HTML:

```html
<link rel="stylesheet" href="raster2.css">
```

Define a grid with 8 columns:

```html
<r-grid columns="8">
  <r-cell></r-cell>
  <r-cell span="3">3</r-cell>
  <r-cell></r-cell>
  <r-cell span="7-8">7-8</r-cell>
  <r-cell span="2+2">2+2</r-cell>
  <r-cell span="5-8">5-8</r-cell>
  <r-cell span="1-4">1-4</r-cell>
  <r-cell span="6..">6..</r-cell>
  <r-cell span="2..">2..</r-cell>
  <r-cell span="4..">4..</r-cell>
  <r-cell span="1-2">1-2</r-cell>
  <r-cell span="4-5">4-5</r-cell>
</r-grid>
```

In this example:
- The grid is divided into 8 columns.
- Cells use the `span` attribute to define their starting column and span.

## Responsive Design

Raster facilitates responsive design with attributes tailored for different screen sizes.

Example:

```html
<r-grid columns="6" columns-s="3">
  <r-cell>Foo</r-cell>
  <r-cell span="2">Description of foo</r-cell>
  <r-cell>Bar</r-cell>
  <r-cell span="2">Description of bar</r-cell>
</r-grid>
```

In this setup:
- On larger screens, the grid has 6 columns.
- On smaller screens, defined by `columns-s`, the grid adjusts to 3 columns.

## Customization

Raster allows for easy customization through CSS variables. For instance, to change the base font size:

```css
:root {
  --fontSize: 18px;
}
```

This adjustment scales the entire website's typography accordingly. Spacing and other design elements can be fine-tuned using variables like `--lineHeight`.

## Download and Examples

- **Download**: [Raster v20](https://github.com/rsms/raster/releases/download/v20/Raster-v20.zip)
- **Examples**: Explore the [example gallery](https://rsms.me/raster/examples/) to see Raster in action.

## License

Raster is open-source software licensed under the MIT license. The source code is available on [GitHub](https://github.com/rsms/raster).

---

*Note: This README is based on information from the [Raster website](https://rsms.me/raster/) and the [GitHub repository](https://github.com/rsms/raster).*