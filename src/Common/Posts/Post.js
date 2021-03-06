import { Component } from '../../Core/Component.js';

const renderMarkup = (options) => `
<div class="post post-${options.size}">
    <a class="post__link" href="#post/${options.postId}">
        <img class="post__image" src="${options.imagePost}"></img>
    </a>
    <div class="post__description">
        <div class="post__info-wrap">
            <img class="post__author-avatar" src="${options.imageAvatar}">
            <div class="post__info">
                <div class="post__author-name">${options.login}</div>
                <div class="post__date">
                    <div class="post__date-published">${options.datePubl}</div>
                    <div class="post__date-point">·</div>
                    <div class="post__time-published">${options.timePubl}</div>
                </div>
            </div>
        </div>
        <div class="post__article">
            <h3 class="post__title">${options.title}</h3>
            <div class="post__content-wrap">
                <p class="post__content">${options.content}</p>
            </div>
        </div>
    </div>
    <div class="post__footer">
        <div class="post__hr"></div>
        <div class="post__stats">
            <div class="post__views">
                <span class="post__views-number">${options.views}</span>
                <i class="post__views-icon"></i>
            </div>
            <div class="post__likes">
                <span class="post__likes-number">${options.likes}</span>
                <i class="post__likes-icon"></i>
            </div>
        </div>
    </div>
</div>
`

export class Post extends Component {
    constructor(options = {
        size: 'single',
        postId: '',
        imagePost: '',
        imageAvatar: '',
        login: '',
        datePubl: '',
        timePubl: '',
        title: '',
        content: '',
        views: '',
        likes: ''
    }) {
        super(options, renderMarkup(options));
    }
}