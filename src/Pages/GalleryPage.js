import { Component } from '../Core/Component.js';
import { Header } from '../Common/Header/Header.js';
import { Footer } from '../Common/Footer/Footer.js';
import { Gallery } from '../Common/Gallery/Gallery.js';

const renderMarkup = (options) =>
    `
    <div class="page-wrap">
            ${
                new Header().getMarkup()
            }
            ${
                new Gallery().getMarkup()
            }
            ${
                new Footer().getMarkup()
            }
    </div>
`

export class GalleryPage extends Component {
    constructor(options = {}) {
        super(options, renderMarkup(options));
    }
}