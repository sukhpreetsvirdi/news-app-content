var ArticlePreviewCard = createClass({
  render: function () {
    return h('div', { className: 'article-card' },
      h('div', { className: 'article-category' }, this.props.entry.getIn(['data', 'category'])),
      h('h2', { className: 'article-title' }, this.props.entry.getIn(['data', 'title'])),
      h('div', { className: 'article-meta' },
        'By ' + this.props.entry.getIn(['data', 'author']) + ' · ' + this.props.entry.getIn(['data', 'publishedAt'])
      ),
      h('p', { className: 'article-summary' }, this.props.entry.getIn(['data', 'summary'])),
      h('div', { className: 'article-content' }, this.props.entry.getIn(['data', 'content']))
    );
  }
});

CMS.registerPreviewStyle(`
  body { background: #f4f4f4; }
  .article-card {
    font-family: Georgia, 'Times New Roman', serif;
    max-width: 680px;
    margin: 24px auto;
    padding: 28px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  }
  .article-category {
    color: #d62828;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.2px;
    margin-bottom: 6px;
  }
  .article-title { font-size: 30px; line-height: 1.25; margin: 4px 0 10px; color: #111; }
  .article-meta { color: #888; font-size: 13px; margin-bottom: 16px; }
  .article-summary { font-size: 18px; color: #444; font-style: italic; margin-bottom: 18px; }
  .article-content { font-size: 16px; line-height: 1.7; color: #222; white-space: pre-wrap; }
`, { raw: true });

CMS.registerPreviewTemplate('articles', ArticlePreviewCard);