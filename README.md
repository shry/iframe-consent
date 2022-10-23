# iframe-consent

This project provides a drop-in replacement for the html iframe tag.

In situations where you have to comply with strict data protection requirements (for example in the EU: GDPR, DSGVO etc.) it can be useful to block iframes until the user has explicitly given his consent. 

## Example

Make sure to include the `iframe-consent.bundled.js` in the head of your html file.

A basic iframe embedded video from YouTube looks like this:

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/jNQXAC9IVRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

Just replace `iframe` with `iframe-consent` and provide some additional privacy policy message.

```html
<iframe-consent responsive icon="auto" width="560" height="315" src="https://www.youtube.com/embed/jNQXAC9IVRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    <p>Provide a message for the user</p>
    <p><a href="#">Link to privacy policy</a></p>
</iframe-consent>
```

## Additional attributes

In addition iframe-consent has some useful exta attributes:

| Attribute 	                         | Description  		                                |
|---	                                 |---		                                            |
| responsive  	                         | Add this attr and the iframe will keep the dimension based on the width and height |
| accept="Accept button text"  	         | Default is "Accept"	                                |
| icon="auto,video,map,default"  	     | Shows an icon on top of the  consent message 	    |
| poster="../src/to/img.jpg"  	         | Provide a background image for the iframe wrapper 	|

## Styling

You can change the style of the iframe-consent with CSS variables:

| Variable 	                             | Default value  		|
|---	                                 |---		            |
| --iframe-consent-wrapper-bg  	         | #eee                 |
| --iframe-consent-wrapper-radius        | -                    |
| --iframe-consent-wrapper-border 	     | 1px solid #ccc	    |
| --iframe-consent-wrapper-iframe-border | 1px solid transparent|
| --iframe-consent-btn-border            | 1px solid black      |
| --iframe-consent-btn-color             | white                |
| --iframe-consent-btn-bg                | black                |
| --iframe-consent-btn-radius            | 5px                  |
| --iframe-consent-btn-padding           | 0.75rem 2rem         |
| --iframe-consent-btn-font-weight       | -                    |
| --iframe-consent-btn-font-family       | -                    |
| --iframe-consent-poster-opacity        | 0.2                  |
| --iframe-consent-icon-color            | -                    |
| --iframe-consent-wrapper-mobile-bg     | white                |

### Bootstrap

If you are using Bootstrap you can quickly adapt some basic styling by using bootstrap variables:

```css
:root {
    --iframe-consent-btn-bg:var(--bs-primary);
    --iframe-consent-btn-border:1px solid var(--bs-primary);
    --iframe-consent-btn-radius:var(--bs-border-radius);
    --iframe-consent-btn-font-family:var(--bs-font-sans-serif);
}
```


## Licence

See the [LICENSE](LICENSE.md) file for details