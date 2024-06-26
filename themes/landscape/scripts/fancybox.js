let rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/;

/**
* Fancybox tag
*
* Syntax:
*   {% fancybox /path/to/image [/path/to/thumbnail] [title] %}
*/

hexo.extend.tag.register('fancybox', function(args){
  let original = args.shift(),
    thumbnail = '',
    title = args.join(' ');

  if (args.length && rUrl.test(args[0])){
    thumbnail = args.shift();
  }

  return `<a data-fancybox="gallery" href="${original}" data-caption="${title}">
    <img width="auto" height="100%" class="post-img" loading="lazy" src="${thumbnail || original}" alt="${title}" />
    </a>
    ${title ? `<span class="caption">${title}</span>` : ''}`;
});
