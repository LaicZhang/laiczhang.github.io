(function($) {
  // --- Search Functionality ---
  const $searchWrap = $('#search-form-wrap');
  let isSearchAnim = false;
  const searchAnimDuration = 200;

  const toggleSearchAnim = (state, callback) => {
    if (isSearchAnim) return; // Avoid double execution during animation

    isSearchAnim = true;

    $searchWrap.toggleClass('on', state === 'start'); // Using toggleClass for cleaner code

    if (state === 'stop') {
      setTimeout(() => {
        isSearchAnim = false;
        callback && callback();
      }, searchAnimDuration);
    } else if(state === 'start' && callback){
        callback();
    }
  };

  $('#nav-search-btn').on('click', () => {
    toggleSearchAnim('start', () => $('.search-form-input').focus());
  });

  $('.search-form-input').on('blur', () => {
    toggleSearchAnim('stop');
  });

  // --- Share Functionality ---
  const pathName = window.location.pathname;
  if (pathName !== '/' && !pathName.startsWith('/page/')) { // Simplified condition

    const $body = $('body');

    $body.on('click', (e) => {
      if (!$(e.target).closest('.article-share-box').length) {
        $('.article-share-box.on').removeClass('on').hide(); // Hide the open share box
      }
    }).on('click', '.article-share-link', function(e) {
        e.stopPropagation();

      const $this = $(this);
      const url = $this.data('url'); // Use .data() to get data attributes
      const encodedUrl = encodeURIComponent(url);
      const id = `article-share-box-${$this.data('id')}`;
      const title = $this.data('title');
      const offset = $this.offset();

      let $box = $('#' + id);

      if ($box.length) {
          $box.toggleClass('on').toggle();
          return;
      }

      const html = `
          <div id="${id}" class="article-share-box">
            <div class="article-share-links">
              <a href="https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodedUrl}" class="article-share-twitter" target="_blank" title="Twitter"></a>
              <a href="https://www.facebook.com/sharer.php?u=${encodedUrl}" class="article-share-facebook" target="_blank" title="Facebook"></a>
              <a href="http://pinterest.com/pin/create/button/?url=${encodedUrl}" class="article-share-pinterest" target="_blank" title="Pinterest"></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}" class="article-share-linkedin" target="_blank" title="LinkedIn"></a>
            </div>
          </div>
        `;

        $box = $(html).appendTo($body); // Use appendTo for performance
        $('.article-share-box.on').removeClass('on').hide();
      $box.css({
          top: offset.top + 25,
          left: offset.left
      }).addClass('on').show();
    }).on('click', '.article-share-box', (e) => e.stopPropagation()) //  Prevent box clicks from closing the box
    .on('click', '.article-share-box-link', function(e){
        e.preventDefault();
        e.stopPropagation();
        try {
            window.open(this.href, 'article-share-box-window-' + Date.now(), 'width=500,height=450');
          } catch (error) {
            console.error("Failed to open share window:", error);
          }
    });
  } else {
    $('.article-share-link').remove();
  }

  // --- Caption Functionality ---
  $('.article-entry').each(function(i) {
    $(this).find('img').each(function() {
      if ($(this).parent().hasClass('fancybox') || $(this).parent().is('a')) return;
      const alt = this.alt;
      if (alt) {
        $(this).after(`<span class="caption">${alt}</span>`)
          .wrap(`<a href="${this.src}" data-fancybox="gallery" data-caption="${alt}"></a>`);
      }
    });

    $(this).find('.fancybox').attr('rel', `article${i}`);
  });

    if ($.fancybox) {
        $('.fancybox').fancybox();
    }

  // --- Mobile Navigation Functionality ---
    const $container = $('#container');
    let isMobileNavAnim = false;
    const mobileNavAnimDuration = 200;

    const toggleMobileNavAnim = (state) => {
      if (isMobileNavAnim) return;

        isMobileNavAnim = true;

        $container.toggleClass('mobile-nav-on', state === 'start');

      if (state === 'stop') {
          setTimeout(() => {
            isMobileNavAnim = false;
          }, mobileNavAnimDuration);
      }
    };

    $('#main-nav-toggle').on('click', () => {
        toggleMobileNavAnim('start');
      });

    $('#wrap').on('click', () => {
        if(isMobileNavAnim || !$container.hasClass('mobile-nav-on')) return;

        toggleMobileNavAnim('stop');
        $container.removeClass('mobile-nav-on');
      });

})(jQuery);

// --- Lazy Background Image Loading ---
document.addEventListener("DOMContentLoaded", function() {
    const lazyBackgrounds = [...document.querySelectorAll("#banner")];

  if ("IntersectionObserver" in window) {
    const lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    });

    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});