### HIDPI
[unprefix webkit device pixel ratio](http://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/)

```css
@media
(-webkit-min-device-pixel-ratio: 2), /* Webkit일 경우 */
(           min-resolution: 192dpi), /* Webkit이 아닌 경우 */
(            min-resolution: 2dppx)  /* 미래에는... px당 dot의 개수 */ {

}
```