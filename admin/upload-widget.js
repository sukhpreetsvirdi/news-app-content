var CloudinaryUploadControl = createClass({
  getInitialState: function () {
    return { url: this.props.value || '' };
  },
  openWidget: function () {
    var self = this;
    window.cloudinary.createUploadWidget(
      {
        cloudName: 'c4xlkkdk',
        uploadPreset: 'news_app_uploads',
        sources: ['local', 'camera'],
        multiple: false
      },
      function (error, result) {
        if (!error && result && result.event === 'success') {
          var url = result.info.secure_url;
          self.setState({ url: url });
          self.props.onChange(url);
        }
      }
    ).open();
  },
  render: function () {
    return h('div', {},
      h('button', {
        type: 'button',
        onClick: this.openWidget,
        style: { padding: '10px 18px', cursor: 'pointer', background: '#1976d2', color: '#fff', border: 'none', borderRadius: '4px' }
      }, this.state.url ? 'Replace File' : 'Choose File'),
      this.state.url
        ? h('div', { style: { marginTop: '10px' } },
            /\.(mp4|mov|webm)$/i.test(this.state.url)
              ? h('video', { src: this.state.url, controls: true, style: { maxWidth: '280px' } })
              : h('img', { src: this.state.url, style: { maxWidth: '280px' } })
          )
        : null
    );
  }
});

var CloudinaryUploadPreview = createClass({
  render: function () {
    var url = this.props.value;
    if (!url) return null;
    return /\.(mp4|mov|webm)$/i.test(url)
      ? h('video', { src: url, controls: true, style: { maxWidth: '400px' } })
      : h('img', { src: url, style: { maxWidth: '400px' } });
  }
});

CMS.registerWidget('cloudinaryUpload', CloudinaryUploadControl, CloudinaryUploadPreview);