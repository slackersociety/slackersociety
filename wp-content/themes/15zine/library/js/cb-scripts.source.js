/* Copyright Codetipi - 15Zine 3.2.2 */
/* global jQuery, cbScripts, cookie */
(function($) { "use strict";

    var cbBGOverlay = $('#cb-overlay'),
    cbBody = $('body'),
    cbWindow = $(window),
    cbDoc = $(document),
    cbWindowHeight = cbWindow.height() + 1,
    cbWindowWidth = cbWindow.width(),
    cbMain = $('.cb-main'),
    cbPostEntryContent = cbMain.find('.cb-entry-content'),
    cbImagesAlignNone = cbPostEntryContent.find('.alignnone'),
    cbMainNavCont = $('.cb-main-nav'),
    cbNavMenuTopLevel = cbMainNavCont.children(),
    cbSlider1Post = $('.cb-slider-1'),
    cbSlider2Posts = $('.cb-slider-2'),
    cbSlider3Posts = $('.cb-slider-3'),
    cbHTMLBody = $('html, body'),
    cbToTop = $('#cb-to-top'),
    cbModFs = $('.cb-module-block-fs'),
    cbContainer = $('#cb-container'),
    cbFullSections = cbContainer.find('.cb-section-fs'),
    cbFirstModHead = cbContainer.find('section:first').find('div:first div:first'),
    cbContent = $('#cb-content'),
    cbVerticalNavDown = $('.cb-vertical-down'),
    cbPostFeaturedImage = $('#cb-featured-image'),
    cbFisFS = $('.cb-fis-fs'),
    cbFisPar = $('#cb-parallax-bg'),
    cbGallery = $('#cb-gallery-post'),
    cbSlideshow = cbPostFeaturedImage.find('.cb-slideshow-wrap'),
    cbNavBar = $('#cb-nav-bar'),
    cbMSearchTrig = $('[id^="cb-s-trigger"]'),
    cbMSearch = $('#cb-menu-search'),
    cbMSearchI = cbMSearch.find('input'),
    cbTrendMenuItem = $('#cb-trend-menu-item'),
    cbWindowScrollTop,
    cbWindowScrollTopCache = 0,
    cbWindowScrollDir,
    cbTimer = 0,
    cbEmbedIconDataAL,
    cbResults = cbMSearch.find("#cb-s-results"),
    cbLWA = $('#cb-lwa'),
    cbLWATrigger = $('[id^="cb-lwa-trigger"]'),
    cbcloser = $('.cb-close-m').add(cbBGOverlay),
    cbLWALogRegTrigger = cbLWA.find('.cb-title-trigger'),
    cbLWAForms = cbLWA.find('.lwa-form'),
    cbLWAinputuser = cbLWAForms.find('.cb-form-input-username'),
    cbStickyOb = $('.cb-sticky-sidebar'),
    cbCodes = [9, 13, 16, 17, 18, 20, 32, 45, 116],
    cbFooterEl = $('#cb-footer'),
    cbMobOp = $('#cb-mob-open'),
    cbMobCl = $('#cb-mob-close'),
    cbEmbedIcon = $('.cb-embed-icon'),
    cbEmbedIconData = cbEmbedIcon.data('cb-pid'),
    cbReady = true,
    cbInfiniteScroll = $('#cb-blog-infinite-scroll'),
    cbTMS = $('#cb-top-menu').find('.cb-top-menu-wrap'),
    cbRatingBars = $('#cb-review-container').find('.cb-overlay span'),
    cbParallaxImg = $('#cb-par-wrap').find('.cb-image'),
    cbBodyBGAttr = cbBody.attr('data-cb-bg'),
    cbWindowHeightTwo,
    cbLoad = false,
    cbAdminBar = false,
    cbCheckerI = false,
    cbFlag = false,
    cbBodyRTL = false,
    cbCounter = 0,
    cbSib,
    cbStickyAjax,
    cbLks = $('[id^="cb-likes-"]'),
    cbStickyTop,
    cbMenuOffset,
    cbStickyHeightCache,
    cbOverlaySpan,
    cbGalleryPostArrows,
    cbMaxItems,
    cbALurl,
    cbNonce,
    cbMenuHeight,
    cbUSerRatingCookie = Cookies.get('cb_user_rating'),
    cbDistStuckParent =[],
    cbIFrames = cbPostEntryContent.find('iframe'),
    cbMobileTablet = false,
    cbMobMenu = $('#cb-mob-menu');

    $('#cb-mob-menu .cb-has-children').prepend('<span class="cb-icon-plus"></span>');
    $('#cb-mob-menu .cb-has-children .cb-icon-plus').click( function( e ){
        e.preventDefault();
        if ( $(this).hasClass('cb-selected') ) {
            $(this).removeClass('cb-selected');
            $(this).next().next().removeClass('cb-mob-ul-show');
        } else {
            $(this).addClass('cb-selected');
            $(this).next().next().addClass('cb-mob-ul-show');
        }

    });

    if ( ( cbBody.hasClass('cb-body-tabl') ) || ( cbBody.hasClass('cb-body-mob') ) ) {
        cbMobileTablet = true;
    }

    cbFullSections.each( function() {
        if ( $(this).next().hasClass('cb-hp-section') ) {
            $(this).next().addClass('cb-section-after-fs');
        }
    });

    if ( cbFirstModHead.hasClass('cb-module-header') && ( ! cbBody.hasClass('paged') ) ) {
        cbFirstModHead.parent().addClass('cb-first-mod-pad');
    }

    if ( cbPostFeaturedImage.length && cbPostFeaturedImage.hasClass('cb-fis-with-bg') ) {
        cbImageLoaded( cbPostFeaturedImage.find('.cb-fis-bg')  );
    }

    if ( typeof cbBodyBGAttr !== 'undefined' ) {
        cbBody.backstretch( cbBodyBGAttr, {fade: 750} );
    }

    cbSlider1Post.each( function() {
        var cbThis = $(this);
        if ( ! cbThis.hasClass('cb-recent-slider') ) {
            cbThis.find('.slides > li').css( 'height', ( cbThis.width() / 2.333333 ) );
        }

    });

    if ( cbBody.hasClass('rtl') ) { cbBodyRTL = true; }
    if ( cbBody.hasClass('admin-bar') ) { cbAdminBar = true; }
    if ( cbNavBar.length ) {
        if  ( cbWindowWidth > 767 ) {
            cbMenuHeight = cbNavBar.outerHeight();
        }
    }


    if ( cbFisFS.length ) {
        var cbFisFSOffTop = cbPostFeaturedImage.offset().top;
        cbWindowHeightTwo =  cbWindowHeight - cbFisFSOffTop;
    }

    cbNavBar.css( 'height', cbMenuHeight );
    cbFisFS.css( 'height', cbWindowHeightTwo );
    cbFisPar.css( 'height', cbWindowHeight );


    cbMobOp.click( function(e) {

        e.preventDefault();
        cbBody.addClass('cb-mob-op');

    });

    cbTrendMenuItem.click( function(e) {

        e.preventDefault();

        if ( $(this).closest('.cb-trending').hasClass('cb-tap') ) {
            cbBody.removeClass('cb-mm-on');
            $(this).closest('.cb-trending').removeClass('cb-tap');
        } else {
            cbBody.addClass('cb-mm-on');
            $(this).closest('.cb-trending').addClass('cb-tap');
        }

    });

    cbMobCl.click( function(e) {

        e.preventDefault();
        cbBody.removeClass('cb-mob-op');

    });

    function cbVideos( el ) {
        el.each( function() {
            var CbThisSrc = $(this).attr('src');

            if( CbThisSrc && ( ( CbThisSrc.indexOf("yout") > -1 ) || ( CbThisSrc.indexOf("vimeo") > -1 ) || ( CbThisSrc.indexOf("daily") > -1 ) ) ) {
                $(this).wrap('<div class="cb-video-frame"></div>');
            }
        });
    }
    cbVideos( cbIFrames );
    function cbOnScroll() {

         if ( cbAdminBar === true ) {
            if ( cbWindowWidth > 781 ) {
                cbWindowScrollTop = cbWindow.scrollTop() + 32;
            } else {
                cbWindowScrollTop = cbWindow.scrollTop() + 46;
            }
        } else {
            cbWindowScrollTop = cbWindow.scrollTop();
        }
        if ( cbWindowScrollTop > cbWindowScrollTopCache ) {
            cbWindowScrollDir = 2;
        } else {
            cbWindowScrollDir = 1;
        }
       cbWindowScrollTopCache = cbWindowScrollTop;

        cbChecker();

    }

    function cbChecker() {

        if ( ! cbCheckerI ) {
            requestAnimationFrame(cbScrolls);
            cbCheckerI = true;
        }
    }

    function cbFixdSidebarLoad() {

        if ( cbLoad === false ) {
            cbScrolls();
            cbScrolls();
            cbLoad = true;
        }
    }

    function cbScrolls() {

        if ( cbBody.hasClass( 'cb-sticky-mm' ) ) {

            if ( ! cbBody.hasClass('cb-sticky-menu-up') ) {

                if ( cbWindowScrollTop >= cbMenuOffset && cbWindowScrollTop != 0 ) {

                    cbBody.addClass('cb-stuck');

                } else {
                    cbBody.removeClass('cb-stuck');
                }
            } else {

                if ( ( cbWindowScrollTop >= cbMenuOffset ) && ( cbWindowScrollDir === 1 ) ) {

                    cbBody.addClass('cb-stuck');

                } else {
                    cbBody.removeClass('cb-stuck');
                }

            }

        }

        if ( ( cbWindowWidth > 767 ) && ( cbMobileTablet === false ) ) {
            if ( cbStickyOb.length ) {

                cbStickyOb.each( function( index ) {
                    var cbThis = $(this),
                        cbStickySBEL = cbThis.find('.cb-sidebar'),
                        cbStickyHeight = cbStickySBEL.outerHeight(true),
                        cbStickyTop = cbThis.offset().top,
                        cbStickySBELTop = cbStickySBEL.offset().top,
                        cbStickySBELBot = cbStickySBELTop + cbStickyHeight,
                        cbStickySBELMT = parseInt( cbStickySBEL.css('margin-top'), 10 ),
                        cbStickyBot = cbStickyTop + cbStickyHeight,
                        cbCurScrollBot = cbWindowHeight + cbWindowScrollTop,
                        cbParent = cbThis.parent(),
                        cbFirstChildCheck = cbParent.children(':first'),
                        cbParentPadTop = parseInt( cbParent.css('padding-top'), 10 ),
                        cbParentTop = cbParent.offset().top  + cbParentPadTop,
                        cbParentHeight = cbParent.outerHeight(),
                        cbParentBot = cbParentTop + cbParentHeight;
                        cbDistStuckParent = cbWindowScrollTop - cbStickyTop;

                    if ( ( ! cbBody.hasClass('home') &&  ! cbBody.hasClass('page')  ) && ( cbFirstChildCheck.hasClass('cb-module-fw') || cbFirstChildCheck.hasClass('cb-grid-block') ) ) {
                        cbParentTop = cbParentTop + cbFirstChildCheck.outerHeight();
                    }
                    if ( cbThis.prev().length === 1 ) {
                        cbSib = cbThis.prev().outerHeight(true);
                    } else {
                        cbSib = cbThis.next().outerHeight(true);
                    }

                    if ( cbStickyHeight < cbSib ) {
                        cbThis.css('height', cbSib );
                    } else {
                        cbThis.css('height', '' );
                        cbStickySBEL.removeClass('cb-is-stuck-perm');
                        cbStickySBEL.addClass('cb-is-stuck-permaasfsfa');
                        return;
                    }

                    if ( cbStickyHeight > cbWindowHeight ) {

                        if ( cbDistStuckParent <= 0 ) {
                            cbStickySBEL.removeClass('cb-is-stuck cb-is-stuck-t cb-is-stuck-perm cb-is-stuck-frozen');
                            cbStickySBEL.css('top', '' );
                        } else if ( cbCurScrollBot > cbParentBot ) {
                            cbStickySBEL.removeClass('cb-is-stuck cb-is-stuck-t');
                            cbStickySBEL.addClass('cb-is-stuck-perm');
                        } else if ( cbWindowScrollDir == 1 ) {

                            if ( cbStickySBEL.hasClass('cb-is-stuck-frozen') ) {

                                if ( (cbWindowScrollTop + cbStickySBELMT ) >= cbStickySBELTop ) {
                                    cbStickySBEL.addClass('cb-is-stuck-frozen');
                                    cbStickySBEL.removeClass('cb-is-stuck cb-is-stuck-t');
                                 } else {
                                    cbStickySBEL.removeClass('cb-is-stuck-perm cb-is-stuck cb-is-stuck-frozen');
                                    cbStickySBEL.addClass('cb-is-stuck-t');
                                    cbStickySBEL.css('top', '' );
                                 }

                            } else {

                                if ( cbStickySBEL.hasClass('cb-is-stuck') ) {
                                    cbStickySBEL.addClass('cb-is-stuck-frozen');
                                    cbStickySBEL.removeClass('cb-is-stuck cb-is-stuck-t');
                                    cbStickySBEL.css('top', ( cbStickySBELTop - cbParentTop - cbStickySBELMT ) );
                                } else {
                                    if ( cbStickySBEL.hasClass('cb-is-stuck') || cbStickySBEL.hasClass('cb-is-stuck-t')  || cbStickySBEL.hasClass('cb-is-stuck-perm' ) ) {
                                        if ( ( cbStickyTop < cbWindowScrollTop ) && ( cbStickySBELTop > cbStickyTop ) ) {
                                            cbStickySBEL.addClass('cb-is-stuck-t');
                                            cbStickySBEL.removeClass('cb-is-stuck-perm cb-is-stuck');
                                        } else {
                                            cbStickySBEL.removeClass('cb-is-stuck-t cb-is-stuck-perm cb-is-stuck cb-is-stuck-frozen');
                                            cbStickySBEL.css('top', '' );
                                        }
                                    }

                                    if ( cbParentBot < ( cbWindowScrollTop + cbStickyHeight )  ) {
                                        cbStickySBEL.removeClass('cb-is-stuck-t cb-is-stuck');
                                        cbStickySBEL.addClass('cb-is-stuck-perm');
                                    }
                                }

                            }

                        } else {

                            if ( cbStickySBEL.hasClass('cb-is-stuck-frozen') ) {

                                if ( cbStickySBELBot < (cbCurScrollBot + cbStickySBELMT ) ) {
                                    cbStickySBEL.removeClass('cb-is-stuck-frozen');
                                    cbStickySBEL.css('top', '' );
                                    cbStickySBEL.addClass('cb-is-stuck');
                                    cbStickySBEL.removeClass('cb-is-stuck-perm cb-is-stuck-t');
                                }

                            } else {

                                if ( cbStickySBEL.hasClass('cb-is-stuck-t') ) {
                                    cbStickySBEL.addClass('cb-is-stuck-frozen');
                                    cbStickySBEL.removeClass('cb-is-stuck cb-is-stuck-t');
                                    cbStickySBEL.css('top', ( cbStickySBELTop - cbParentTop - cbStickySBELMT ) );
                                } else {

                                    if ( cbStickySBEL.hasClass('cb-is-stuck-perm') && (  ( cbStickyTop < cbWindowScrollTop ) && ( cbStickySBELTop > cbStickyTop ) ) ) {

                                    } else if ( cbStickyBot < cbCurScrollBot ) {
                                        cbStickySBEL.addClass('cb-is-stuck');
                                        cbStickySBEL.removeClass('cb-is-stuck-perm cb-is-stuck-t');
                                    } else {
                                        cbStickySBEL.removeClass('cb-is-stuck cb-is-stuck-t cb-is-stuck-perm cb-is-stuck-frozen');
                                        cbStickySBEL.css('top', '' );
                                    }
                                }

                            }
                        }

                    } else {

                        if ( cbStickyTop < cbWindowScrollTop ) {
                            cbStickySBEL.addClass('cb-is-stuck-t');
                            cbStickySBEL.removeClass('cb-is-stuck-perm');
                        } else {
                            cbStickySBEL.removeClass('cb-is-stuck cb-is-stuck-t cb-is-stuck-perm');
                        }

                        if ( cbParentBot < ( cbWindowScrollTop + cbStickyHeight )  ) {
                            cbStickySBEL.removeClass('cb-is-stuck-t');
                            cbStickySBEL.addClass('cb-is-stuck-perm');
                        }

                    }

                });

            }
        }

        if ( ( cbWindowWidth < 768 ) && ( cbAdminBar === true ) ) {

            if ( ( ( 92 - cbWindowScrollTop ) >= 0 ) ) {
                cbBody.removeClass('cb-tm-stuck');
                if ( cbWindowScrollTop == 32 ) {
                    cbTMS.css('top', 46 );
                    cbMobMenu.css('top', 46 );
                } else {
                    cbTMS.css('top', ( 92 - cbWindowScrollTop ) );
                    cbMobMenu.css('top', ( 92 - cbWindowScrollTop ) );
                }

            } else {
                cbBody.addClass('cb-tm-stuck');
                cbTMS.css('top', 0 );
                cbMobMenu.css('top', 0 );
            }
        }

        if ( ( cbParallaxImg.length !== 0 ) && ( cbMobileTablet === false ) ) {

            if ( cbWindowScrollTop <  cbWindowHeight ) {
                cbBody.removeClass('cb-par-hidden');
                if ( cbAdminBar === true) {
                    cbWindowScrollTop = cbWindowScrollTop - 32;
                }

                var cbyPos = ( ( cbWindowScrollTop / 2    ) ),
                    cbCoords = cbyPos + 'px';

                    cbParallaxImg.css({ '-webkit-transform': 'translate3d(0, ' + cbCoords + ', 0)', 'transform': 'translate3d(0, ' + cbCoords + ', 0)' });
            } else {
                cbBody.addClass('cb-par-hidden');
            }

        }

        if ( cbInfiniteScroll.length ) {

            if ( cbReady === true ) {

                var cbPArentEl = $('.cb-pagination-button').closest('.cb-main'),
                    cbLastArticle = cbPArentEl.find('article').last();

                if ( cbLastArticle.hasClass('cb-grid-x') ) {
                    cbLastArticle = cbLastArticle.children().last();
                }

                if ( cbLastArticle.visible( true ) ) {

                    cbReady = false;

                    var cbCurrentPagination = $('.cb-pagination-button').find('a').attr('href');
                    

                    if ( typeof cbCurrentPagination !== 'undefined' ) {
                        cbPArentEl.addClass('cb-pre-load cb-pro-load');
                        $.get( cbCurrentPagination, function( data ) {

                            var cbExistingPosts, cbExistingPostsRaw;

                            if ( typeof _gaq !== 'undefined' && _gaq !== null ) {
                                _gaq.push(['_trackPageview', cbCurrentPagination]);
                            }

                            if ( typeof ga !== 'undefined' && ga !== null ) {
                                ga( 'send', 'pageview', cbCurrentPagination );
                            }

                            cbExistingPostsRaw = $(data).filter('#cb-outer-container').find('.cb-pagination-button').closest('.cb-main');
                            $(cbExistingPostsRaw).find('.cb-category-top, .cb-module-header, .cb-grid-block, .cb-breadcrumbs').remove();
                            $(cbExistingPostsRaw).children().addClass( 'cb-slide-up' );
                            cbExistingPosts = cbExistingPostsRaw.html();
                            cbPArentEl.children().last().remove();
                            cbPArentEl.append(cbExistingPosts);
                            cbPArentEl.removeClass('cb-pro-load');
                            cbStickyAjax = cbPArentEl.next().find('.cb-is-stuck-perm');
                            if ( cbStickyAjax.length ) {
                                cbStickyAjax.removeClass('cb-is-stuck-perm');
                                cbStickyAjax.addClass('cb-is-stuck');
                            }

                        });
                    }

                }
            }
        }

        cbRatingsVis( cbRatingBars );

        cbCheckerI = false;
    }

    function cbRatingsVis( element ) {
        $.each(element, function(index, element) {

            if ( $(element).visible(true) ) {
                $(element).addClass('cb-trigger');
            }
        });
    }

    window.addEventListener( 'scroll', cbOnScroll, false );

    function cbMakeImgs( cbElement, ref ) {

        if ( ref.hasClass( cbScripts.cbFsClass ) )  {

            if ( cbElement.hasClass('wp-caption') ) {
                var cbElementImg = cbElement.find('img');

                if  ( cbElementImg.hasClass( 'size-full' ) ) {
                    cbElement.addClass('cb-hide-bars cb-fs-img');
                    cbElementImg.addClass('cb-vw-img');
                    if ( cbBodyRTL === true ) {
                        cbElement.css( { 'margin-right': ( ( cbPostEntryContent.width() / 2 ) - ( cbWindowWidth / 2 ) ), 'max-width': 'none' }).addClass('cb-fs-embed');
                    } else {
                        cbElement.css( { 'margin-left': ( ( cbPostEntryContent.width() / 2 ) - ( cbWindowWidth / 2 ) ), 'max-width': 'none' }).addClass('cb-fs-embed');
                    }

                    cbElement.add(cbElementImg).css( 'width', cbWindowWidth );
                }

            } else if ( cbElement.hasClass( 'size-full' ) ) {
                cbElement.addClass('cb-hide-bars cb-fs-img cb-vw-img');
                if ( cbBodyRTL === true ) {
                    cbElement.css( { 'margin-right': ( ( cbPostEntryContent.width() / 2 ) - ( cbWindowWidth / 2 ) ), 'max-width': 'none', 'width': cbWindowWidth });
                } else {
                    cbElement.css( { 'margin-left': ( ( cbPostEntryContent.width() / 2 ) - ( cbWindowWidth / 2 ) ), 'max-width': 'none', 'width': cbWindowWidth });
                }

            }
        }
    }


    cbImagesAlignNone.each( function() {
        cbMakeImgs( $(this), cbBody );
    });

    function cbImageLoaded( image ) {
        image.imagesLoaded( { background: true }, function() {
          image.addClass('cb-fis-bg-ldd');
        });
    }

    if ( $('#cb-alp-loader').length ) {
        var cbAlp = $('#cb-alp-loader'),
            controller = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({triggerElement: cbAlp, offset: - 800 }).addTo(controller).on('enter', function (e) {
            if ( ! cbAlp.hasClass('cb-pro-load') ) {
                cbAlp.addClass('cb-pro-load');
                cbAL(); 
            }

        });
    }

    function cbAlUpdate( el ) {
        scene.update();
        cbAlp.removeClass('cb-pro-load');
        new ScrollMagic.Scene({triggerElement: el}).addTo(controller).on("enter leave", function (e) {
            cbAlUrl( el, e.type );
        });
    }

    function cbAlUrl( el, etype ){
        if ( etype == 'leave' ) {
            var elPrev = el.prev().data('cb-purl');
            if ( typeof elPrev !== 'undefined' ) {
                window.history.pushState('', '', elPrev );
            }
        } else {
            window.history.pushState('', '', el.data('cb-purl'));
        }
    }

    function cbAL() {

        $.ajax({
            method : "GET",
            data : { action: 'cb_alp_l', cbALlNonce: cbScripts.cbALlNonce, cbPostId: cbScripts.cbPostID , cbCounter: cbCounter },
            url: cbScripts.cbUrl,
            beforeSend : function(){
            },
            success : function(data){
                if ( data.length === 0 ) {
                    cbAlp.addClass('cb-no-more');
                    return;
                }
                cbContent.append(data);
                if ( $('#cb-al-post-' + cbCounter + ' #cb-gallery-post' ).length ) {
                    $('#cb-al-post-' + cbCounter + ' #cb-gallery-post' ).slick({variableWidth: true, centerMode: false, rtl: cbBodyRTL,  prevArrow: '<i class="fa cb-slider-arrow cb-slider-arrow-p fa-angle-left"></i>', nextArrow: '<i class="fa cb-slider-arrow cb-slider-arrow-n fa-angle-right"></i>', });
                    $('#cb-al-post-' + cbCounter + ' #cb-gallery-post' ).find('.slick-track').children().addClass('cb-slider-ldd').removeClass('cb-slider-hidden');
                }


                $('#cb-al-post-' + cbCounter + ' .cb-slider-1').flexslider({maxItems: 1, minItems: 1, keyboard: true, multipleKeyboard: true, animation: 'slide', slideshow: cbScripts.cbSlider[1], slideshowSpeed: cbScripts.cbSlider[2], animationSpeed: cbScripts.cbSlider[0], pauseOnHover: cbScripts.cbSlider[3], controlNav: false, nextText: '<i class="fa fa-angle-right"></i>', prevText: '<i class="fa fa-angle-left"></i>', });

                if ( $('#cb-al-post-' + cbCounter + ' .cb-slideshow-wrap' ).length ) {
                    $('#cb-al-post-' + cbCounter + ' .cb-slideshow-wrap' ).slick({infinite: true, rtl: cbBodyRTL, speed: 500, fade: true, autoplay: true, autoplaySpeed: 3500, cssEase: 'linear', arrows: false, pauseOnHover: false });
                    $('#cb-al-post-' + cbCounter + ' .cb-slideshow-wrap' ).find('.slick-track').children().addClass('cb-slider-ldd').removeClass('cb-slider-hidden');
                }

                if (  $('#cb-al-post-' + cbCounter + ' #cb-review-container').length ) {
                    var cbNewRatings = $('#cb-al-post-' + cbCounter + ' #cb-review-container').find('.cb-overlay span');
                    if ( cbNewRatings.length ) {
                        cbRatingBars = cbRatingBars.add(cbNewRatings);
                    }
                    cbVoteRaters = cbVoteRaters.add($('#cb-al-post-' + cbCounter).find('.cb-user-rating-wrap') );
                    cbUserVote( cbVoteRaters );
                }

                $('#cb-al-post-' + cbCounter + ' .cb-fis').on('click', '.cb-embed-icon', function( e ) {
                    e.preventDefault();
                    cbEmbedIconDataAL = $(this).data('cb-pid');
                    $('#cb-media-trigger-' + cbEmbedIconDataAL).addClass('cb-active');
                    $('#cb-media-trigger-' + cbEmbedIconDataAL).find('.cb-close-m').click( function(){
                        cbBody.removeClass('cb-m-modal-on');
                    });
                    cbBody.addClass('cb-m-modal-on');
                });

                cbPostEntryContent = $('#cb-al-post-' + cbCounter + ' .cb-entry-content');
                $('#cb-al-post-' + cbCounter).find('.alignnone').each( function() {
                    cbMakeImgs($(this), $('#cb-al-post-' + cbCounter + ' .cb-post-wrap' ));
                });

                var cbCurrentFI = $('#cb-al-post-' + cbCounter + ' #cb-featured-image');

                if ( cbCurrentFI.find('.cb-fis-bg').length ) {
                    cbImageLoaded( cbCurrentFI.find('.cb-fis-bg') );
                }

                if ( cbCurrentFI.hasClass('cb-fis-block-parallax') ) {
                    $('#cb-al-post-' + cbCounter + ' #cb-parallax-bg').css( 'height', cbWindowHeight );
                }
                if ( $( '#cb-al-post-' + cbCounter + ' [id^="cb-likes-"]').length ) {
                    cbLkit($( '#cb-al-post-' + cbCounter + ' [id^="cb-likes-"]'));
                }

                if ( cbCurrentFI.hasClass('cb-fis-fs') ) {
                    cbCurrentFI.css( 'height', cbWindowHeight );
                }

                if ( $('#cb-al-post-' +cbCounter ).find('.cb-sticky-sidebar').length ) {
                    cbStickyOb = cbStickyOb.add(  $('#cb-al-post-' +cbCounter ).find('.cb-sticky-sidebar') );
                }

                cbALurl = $('#cb-al-post-' + cbCounter ).data('cb-purl');
                cbLoadTips();
                cbAlUpdate( $('#cb-al-post-' + cbCounter ) );
                cbVideos( $('#cb-al-post-' + cbCounter ).find('iframe') );
                $('#cb-al-post-' + cbCounter).find('.cb-video-frame').fitVids();

                if ( typeof _gaq !== 'undefined' && _gaq !== null ) {
                    _gaq.push(['_trackPageview', cbALurl]);
                }  

                if ( typeof ga !== 'undefined' && ga !== null ) {
                    ga( 'send', 'pageview', cbALurl );
                }

                $.ajax({
                    url: cbScripts.cbPlURL + '/jetpack/modules/tiled-gallery/tiled-gallery/tiled-gallery.js',
                    type:'HEAD',
                    success: function() {
                        $.getScript( cbScripts.cbPlURL + '/jetpack/modules/tiled-gallery/tiled-gallery/tiled-gallery.js' );
                    }
                });

                cbCounter++;

            },
            error : function(jqXHR, textStatus, errorThrown) {
                console.log("cbsa " + jqXHR + " :: " + textStatus + " :: " + errorThrown);
            }
        });
    }
    
    if ( cbLks.length ) {
        cbLkit(cbLks);
    }

    function cbLkit( el ) {
        var cbLksCkie = Cookies.get('cb_lks'),
        cbZineNonce = $('#_zinenonce').attr('value');
        el.each(function() {

            $(this).click( function( e ) {
                var cbThis = $(this),
                cbLksPid = cbThis.data('cb-pid');

                if ( cbThis.hasClass( 'cb-lkd' ) || cbThis.hasClass( 'cb-lking' ) || ( ( cbLksCkie instanceof Array ) && ( cbLksCkie.indexOf( cbLksPid ) > -1 ) ) ) {
                    return;
                }
                cbThis.addClass('cb-lking');

                e.preventDefault();

                $.ajax({
                    type : "POST",
                    data : { action: 'cb_lks_a_l', cbZineAlNonce: cbZineNonce, cbLksPid: cbLksPid },
                    url: cbScripts.cbUrl,
                    dataType:"json",
                    beforeSend : function() {
                        cbThis.addClass('cb-loading');
                    },
                    success : function( data ) {
                        Cookies.set('cb_lks', data[1], { expires: 14 });
                        cbThis.addClass('cb-lkd');
                        cbThis.removeClass('cb-lkd-0');

                        if ( ( data[0] !== '-1' ) && ( data[0] !=='null' ) ) {
                            cbThis.find('.cb-likes-int').html( data[0] );
                        }
                        cbThis.removeClass('cb-lking');
                    },
                    error : function(jqXHR, textStatus, errorThrown) {
                        console.log("cb_lks_ " + jqXHR + " :: " + textStatus + " :: " + errorThrown);
                    }
                });
            });

        });
    }
    var cbVoteRaters = $('[id^="cb-vote-"]');
    cbUserVote( cbVoteRaters );

    cbVerticalNavDown.click( function( e ) {

        e.preventDefault();
        if ( cbBody.hasClass('page-template-page-15zine-builder') ) {
            if ( cbContent.length ) {
                cbHTMLBody.animate({ scrollTop: ( cbContent.offset().top - 60 ) }, 1500);
            } else {
                cbHTMLBody.animate({ scrollTop: ( cbContainer.find('section').eq(0).offset().top - 60 ) }, 1500);
            }
        } else {
            cbHTMLBody.animate({ scrollTop: ( cbMain.offset().top - 60 ) }, 1500);
        }

    });

    cbToTop.click( function( e ) {

        e.preventDefault();
        cbHTMLBody.animate( {scrollTop: 0 }, 1500 );

    });

    $('.cb-module-half:odd').each(function(){
        $(this).prev().addBack().wrapAll($('<div/>', {'class': 'cb-double-block clearfix'}));
    });

    cbModFs.each( function() {
        var cbThis = $(this);
        cbThis.css( { 'margin-left': ( ( cbContent.width() / 2 ) - ( cbWindowWidth / 2 ) ), 'max-width': 'none', 'width': cbWindowWidth });
    });

    cbLWATrigger.click( function( e ) {
        e.preventDefault();
        cbBody.addClass('cb-lwa-modal-on');
        if ( cbMobileTablet === false ) {
            cbLWAinputuser.focus();
        }

    });

    cbMSearchTrig.click( function( e ) {
        e.preventDefault();

        cbBody.addClass('cb-s-modal-on');
        if ( cbMobileTablet === false ) {
            cbMSearchI.focus();
        }
    });

    cbEmbedIcon.click( function( e ) {

        e.preventDefault();
        cbBody.addClass('cb-m-modal-on');
        $('#cb-media-trigger-' + cbEmbedIconData).addClass('cb-active');
        cbPlayYTVideo();

    });

    cbcloser.click( function() {
        $('[id^="cb-media-trigger-"]').removeClass('cb-active');
        cbBody.removeClass('cb-lwa-modal-on cb-s-modal-on cb-m-modal-on');
        cbPauseYTVideo();
    });

    cbDoc.keyup(function(e) {

        if (e.keyCode == 27) {
            cbBody.removeClass('cb-lwa-modal-on cb-s-modal-on cb-m-modal-on');
            cbPauseYTVideo();
        }
    });
    var cbLWAform = cbLWA.find('.lwa-form'),
        cbLWApass = cbLWA.find('.lwa-remember'),
        cbLWAregister = cbLWA.find('.lwa-register-form');

    cbLWALogRegTrigger.click( function( e ) {
        e.preventDefault();
        var cbThis = $(this);

        cbLWALogRegTrigger.removeClass('cb-active');
        cbThis.addClass('cb-active');

        if ( cbThis.hasClass('cb-trigger-reg') ) {

            cbLWAform.add(cbLWApass).removeClass('cb-form-active');
            cbLWAregister.addClass('cb-form-active');

        } else if ( cbThis.hasClass('cb-trigger-pass') ) {
            cbLWAregister.add(cbLWAform).removeClass('cb-form-active');
            cbLWApass.addClass('cb-form-active');
        } else {
            cbLWAregister.add(cbLWApass).removeClass('cb-form-active');
            cbLWAform.addClass('cb-form-active');
        }

    });

    $('.tiled-gallery').find('a').attr('rel', 'tiledGallery');
    $('.gallery').find('a').attr('rel', 'tiledGallery');

    function cbLoadTips() {
        if  ( cbWindowWidth > 767 ) {
            $('.cb-tip-bot').tipper({
                direction: 'bottom',
                follow: true
            });
        }
    }

    $( document ).ready(function($) {

        if ( cbNavBar.length ) {
            if  ( cbWindowWidth > 767 ) {
                cbMenuOffset = cbNavBar.offset().top;
            }
        }

        cbLoadTips();

        $('.cb-toggler').find('.cb-toggle').click(function(e) {
            e.preventDefault();
            $(this).parent().toggleClass('cb-on');
        });

        $('.cb-tabs').find('> ul').tabs('.cb-panes .cb-tab-content');

        cbPostEntryContent.find('a').has('img').each(function () {

            var cbImgTitle = $('img', this).attr( 'title' ),
                cbAttr = $(this).attr('href');

            var cbWooLightbox = $(this).attr('rel');

            if (typeof cbImgTitle !== 'undefined') {
                $(this).attr('title', cbImgTitle);
            }

            if ( ( typeof cbAttr !== 'undefined' )  && ( cbWooLightbox !== 'prettyPhoto[product-gallery]' ) ) {
                var cbHref = cbAttr.split('.');
                var cbHrefExt = $(cbHref)[$(cbHref).length - 1];

                if ((cbHrefExt === 'jpg') || (cbHrefExt === 'jpeg') || (cbHrefExt === 'png') || (cbHrefExt === 'gif') || (cbHrefExt === 'tif')) {
                    $(this).addClass('cb-lightbox');
                }
            }

        });

        $('.cb-video-frame').fitVids();
        if ( !!$.prototype.boxer ) {
            $(".cb-lightbox").boxer({ fixed: true });
        }

        cbSlider1Post.flexslider({
          maxItems: 1,
          minItems: 1,
          keyboard: true,
          multipleKeyboard: true,
          animation: 'slide',
          slideshow: cbScripts.cbSlider[1],
          slideshowSpeed: cbScripts.cbSlider[2],
          animationSpeed: cbScripts.cbSlider[0],
          pauseOnHover: cbScripts.cbSlider[3],
          controlNav: false,
          nextText: '<i class="fa fa-angle-right"></i>',
          prevText: '<i class="fa fa-angle-left"></i>',
        });

        $('.cb-slider-grid-3').flexslider({
          maxItems: 1,
          minItems: 1,
          keyboard: true,
          multipleKeyboard: true,
          animation: 'slide',
          slideshow: cbScripts.cbSlider[1],
          slideshowSpeed: cbScripts.cbSlider[2],
          animationSpeed: cbScripts.cbSlider[0],
          pauseOnHover: cbScripts.cbSlider[3],
          controlNav: false,
          nextText: '<i class="fa fa-angle-right"></i>',
          prevText: '<i class="fa fa-angle-left"></i>',
        });

        if ( cbBody.hasClass('cb-sidebar-none-fw') ) {
            cbMaxItems = 3;
        } else {
            cbMaxItems = 2;
        }

        cbSlider2Posts.flexslider({
          maxItems: cbMaxItems,
          minItems: 1,
          animation: 'slide',
          slideshow: cbScripts.cbSlider[1],
          slideshowSpeed: cbScripts.cbSlider[2],
          animationSpeed: cbScripts.cbSlider[0],
          pauseOnHover: cbScripts.cbSlider[3],
          itemWidth: 300,
          itemMargin: 3,
          controlNav: false,
          nextText: '<i class="fa fa-angle-right"></i>',
          prevText: '<i class="fa fa-angle-left"></i>',
        });

        cbSlider3Posts.flexslider({
          maxItems: 3,
          minItems: 1,
          animation: 'slide',
          slideshow: cbScripts.cbSlider[1],
          slideshowSpeed: cbScripts.cbSlider[2],
          animationSpeed: cbScripts.cbSlider[0],
          pauseOnHover: cbScripts.cbSlider[3],
          itemWidth: 300,
          itemMargin: 3,
          controlNav: false,
          nextText: '<i class="fa fa-angle-right"></i>',
          prevText: '<i class="fa fa-angle-left"></i>',
        });

        if ( cbMobileTablet === false ) {

           cbNavMenuTopLevel.hoverIntent(function(){
                cbBody.addClass('cb-mm-on');
            }, function() {
                cbBody.removeClass('cb-mm-on');
            });
        } else {
            cbNavMenuTopLevel.on('click', function(e) {
                var cbThis = $(this);
                cbThis.siblings('.cb-tap').removeClass('cb-tap');
                if ( ( cbThis.hasClass('cb-trending') )  || cbThis.find('> div').length === 0 ){
                } else if ( cbThis.hasClass('cb-tap') ) {
                    return true;
                } else {
                    e.preventDefault();
                    cbBody.addClass('cb-mm-on');
                    cbThis.addClass('cb-tap');
                }
            });

        }

        cbHTMLBody.on( 'mousewheel DOMMouseScroll', function() {
            cbHTMLBody.stop();
        });


        cbDoc.ajaxStop(function() {
          cbReady = true;
          $('.cb-pro-load').removeClass('cb-pro-load');
        });

        cbContainer.on('click', '#cb-blog-infinite-load a', function( e ){

            e.preventDefault();

            var cbCurrentPagination = $(this).attr( 'href' ),
              cbCurrentParent = $(this).parent(),
              cbMainAj = $(this).closest('.cb-main');

            if( $(this).hasClass('cb-pre-load') ) {
                return;
            }
            cbMainAj.addClass( 'cb-pre-load cb-pro-load' );
            $(this).addClass( 'cb-pre-load' );

            $.get( cbCurrentPagination, function( data ) {

                var cbExistingPosts, cbExistingPostsRaw;

                if ( typeof _gaq !== 'undefined' && _gaq !== null ) {
                    _gaq.push(['_trackPageview', cbCurrentPagination]);
                }

                if ( typeof ga !== 'undefined' && ga !== null ) {
                    ga( 'send', 'pageview', cbCurrentPagination );
                }

                cbExistingPostsRaw = $(data).filter('#cb-outer-container').find('.cb-main');

                $(cbExistingPostsRaw).find('.cb-category-top, .cb-module-header, .cb-grid-block, .cb-breadcrumbs').remove();

                $(cbExistingPostsRaw).children().addClass( 'cb-slide-up' );
                cbExistingPosts = cbExistingPostsRaw.html();

                cbMainAj.append(cbExistingPosts);
                cbMainAj.removeClass('cb-pro-load');
                cbCurrentParent.addClass( 'cb-hidden' );

                cbStickyAjax = cbMainAj.next().find('.cb-is-stuck-perm');
                if ( cbStickyAjax.length ) {
                    cbStickyAjax.removeClass('cb-is-stuck-perm');
                    cbStickyAjax.addClass('cb-is-stuck');
                }

                if ( cbScripts.cbShortName !== null ) {
                    window.DISQUSWIDGETS = undefined;
                    $.getScript( 'http://' + cbScripts.cbShortName + '.disqus.com/count.js' );
                } 

            });

        });

        $('.cb-c-l').hoverIntent(function(){

            var cbThis = $(this),
                cbThisText = $(this).text(),
                cbBigMenu = cbThis.closest('div');

            if ( cbBigMenu.hasClass('cb-big-menu') ) {

                var cid = cbThis.attr('data-cb-c'),
                    chref = cbThis.attr('href'),
                    cbBigMenuEl = $(cbBigMenu[0].firstChild),
                    cbBigMenuUL = cbBigMenuEl.find('ul'),
                    cbBigMenuUT = cbBigMenuEl.find('.cb-upper-title'),
                    cbBigMenuSA = cbBigMenuUT.find('.cb-see-all'),
                    cbBigMenuUTH2 = cbBigMenuUT.find('h2');

                if ( cbBigMenuUTH2.text() !== cbThisText ) {

                    $.ajax({
                        type : "GET",
                        data : { action: 'cb_mm_a', cid: cid, acall: 1 },
                        url: cbScripts.cbUrl,
                        beforeSend : function(){
                            cbBigMenuEl.addClass('cb-pro-load');
                        },
                        success : function(data){
                            cbBigMenuUTH2.text(cbThisText);
                            cbBigMenuUL.html($(data));
                            cbBigMenuUL.find('> li').addClass('cb-slide-to-r');
                            cbBigMenuSA.attr('href', chref);
                        },
                        error : function(jqXHR, textStatus, errorThrown) {
                            console.log("cbmm " + jqXHR + " :: " + textStatus + " :: " + errorThrown);
                            }
                    });
                }
            }

        }, function() {});

        $('.cb-trending-op').click(function(e ){
            e.preventDefault();
            var cbThis = $(this),
                cbTBlock = $('#cb-trending-block'),
                cbAllOptions = cbTBlock.find('.cb-trending-op'),
                cbTBlockUL = cbTBlock.find('#cb-trend-data'),
                cbr = cbThis.attr('data-cb-r');

            if ( ! cbThis.hasClass('cb-selected') ) {

                $.ajax({
                    type : "GET",
                    data : { action: 'cb_t_a', cbr: cbr },
                    url: cbScripts.cbUrl,
                    beforeSend : function() {
                        cbTBlock.addClass('cb-pro-load');
                    },
                    success : function(data){
                        cbAllOptions.removeClass('cb-selected');
                        cbThis.addClass('cb-selected');
                        cbTBlockUL.html($(data));
                    },
                    error : function(jqXHR, textStatus, errorThrown) {
                        console.log("cbr " + jqXHR + " :: " + textStatus + " :: " + errorThrown);
                        }
                });
            }

        });

        cbMSearchI.keyup(function( e ) {

            if ( cbTimer ) {
                clearTimeout(cbTimer);
            }

            if ( e.keyCode == 27 ) {
                cbBody.removeClass('cb-lwa-modal-on');
            } else if ( $.inArray( e.keyCode, cbCodes ) == -1 ) {
                if ( ! cbBody.hasClass('cb-las-off') ) {
                    cbTimer = setTimeout( cbSa, 300 );
                }
            }

        });

        function cbSa() {

            var cbThisValue = cbMSearchI.val();
            if ( cbThisValue.length === 0 ) cbResults.empty();
            if ( cbThisValue.length < 3 ) return;
            $.ajax({
                type : "GET",
                data : { action: 'cb_s_a', cbi: cbThisValue },
                url: cbScripts.cbUrl,
                beforeSend : function(){
                    cbMSearch.find('.cb-s-modal-inner').addClass('cb-pro-load');
                },
                success : function(data){
                    cbMSearch.addClass('cb-padded');
                    cbResults.html( $(data) );
                    $('#cb-s-all-results').click(function(e) {
                        e.preventDefault();
                        $('#cb-s-results').prev().trigger('submit');
                    });

                },
                error : function(jqXHR, textStatus, errorThrown) {
                    console.log("cbsa " + jqXHR + " :: " + textStatus + " :: " + errorThrown);
                }
            });
        }

        if ( cbFisFS.length ) {

            var cbFisFSOffTop = cbPostFeaturedImage.offset().top,
            cbWindowHeightTwo =  cbWindowHeight - cbFisFSOffTop;

            cbFisFS.css( 'height', cbWindowHeightTwo );
            cbFisPar.css( 'height', cbWindowHeight );
        }

        if ( cbGallery.length ) {
            cbGallery.slick({
                variableWidth: true,
                centerMode: true,
                rtl: cbBodyRTL,
                prevArrow: '<i class="fa cb-slider-arrow cb-slider-arrow-p fa-angle-left"></i>',
                nextArrow: '<i class="fa cb-slider-arrow cb-slider-arrow-n fa-angle-right"></i>',
            });

            cbGallery.on('swipe', function(event, slick, currentSlide, nextSlide){
                cbBody.addClass('cb-arrows-hover');
            });

            cbGalleryPostArrows = cbGallery.find('.cb-slider-arrow');

            cbGalleryPostArrows.on({
                mouseenter: function () {
                    cbBody.addClass('cb-arrows-hover');
                },
                mouseleave: function () {
                    cbBody.removeClass('cb-arrows-hover');
                }
            });


            $('#cb-content').click( function( e ) {
                if (e.target == this) {
                    cbBody.removeClass('cb-arrows-hover');
                }

            });
        }
        if ( cbSlideshow.length ) {
            cbSlideshow.slick({infinite: true, speed: 500, rtl: cbBodyRTL, fade: true, autoplay: true, autoplaySpeed: 3500, cssEase: 'linear', arrows: false, pauseOnHover: false });
        }

    });

    $(window).load(function() {

        cbGallery.find('.slick-track').children().addClass('cb-slider-ldd').removeClass('cb-slider-hidden');
        cbSlideshow.find('.slick-track').children().addClass('cb-slider-ldd').removeClass('cb-slider-hidden');

        var cbTabber = $('.tabbernav'),
        cbTaggerLength = cbTabber.children().length;
        if ( cbTaggerLength === 4 ) { cbTabber.addClass("cb-tab-4"); }
        if ( cbTaggerLength === 3 ) { cbTabber.addClass("cb-tab-3"); }
        if ( cbTaggerLength === 2 ) { cbTabber.addClass("cb-tab-2"); }
        if ( cbTaggerLength === 1 ) { cbTabber.addClass("cb-tab-1"); }

        if ( cbAdminBar === true ) {
            cbWindowScrollTop = cbWindow.scrollTop() + 32;
        } else {
            cbWindowScrollTop = cbWindow.scrollTop();
        }

        cbFixdSidebarLoad();


    });

    $(window).resize(function() {

        var cbFisFSOffTop, cbWindowHeightTwo;
        cbWindowHeight = cbWindow.height() + 1;
        cbWindowWidth = cbWindow.width();

        cbSlider1Post.each( function() {
            var cbThis = $(this);
            if ( ! cbThis.hasClass('cb-recent-slider') ) {
                cbThis.find('.slides > li').css( 'height', ( cbThis.width() / 2.333333 ) );
            }

        });

        if ( ( cbFisFS.length ) ) {
            cbFisFSOffTop = cbPostFeaturedImage.offset().top;
            cbWindowHeightTwo =  cbWindowHeight - cbFisFSOffTop;
        }
        cbFisPar.css( 'height', cbWindowHeight );
        cbFisFS.css( 'height', cbWindowHeightTwo );
        if ( ! cbBody.hasClass('cb-stuck') ) {
            if ( cbNavBar.length ) {
                if  ( cbWindowWidth > 767 ) {
                    cbNavBar.css( 'height', '' );
                    cbMenuHeight = cbNavBar.outerHeight();
                    cbNavBar.css( 'height', cbMenuHeight );
                }
            }

        }

        if ( cbWindowWidth < 767 ) {
            cbStickyOb.css('height', '');
        }

        cbModFs.each( function() {
            var cbThis = $(this),
            cbWindowWidth = cbWindow.width();
            cbThis.css( { 'margin-left': ( ( cbContent.width() / 2 ) - ( cbWindowWidth / 2 ) ), 'max-width': 'none', 'width': cbWindowWidth });
        });

        cbContent.find('.alignnone').each( function() {
            cbMakeImgs( $(this), $(this).closest('.cb-embed-fs') );
        });

    });

    function cbUserVote( element ) {

        element.each(function() {

            var cbThisUV = $(this),
            cbVotePid = cbThisUV.closest('#cb-review-container').data('cb-pid'),
            cbCriteriaAverage = cbThisUV.find('.cb-criteria-score.cb-average-score'),
            cbVoteCriteria = cbThisUV.find('.cb-criteria'),
            cbYourRatingText = cbVoteCriteria.attr('data-cb-text'),
            cbVoteOverlay = cbThisUV.find('.cb-overlay'),
            cbExistingOverlaySpan,
            cbNotVoted,
            cbExistingOverlay,
            cbExistingScore = cbCriteriaAverage.text(),
            cbExistingVoteLine = cbVoteCriteria.html();

            if ( cbThisUV.hasClass( 'cb-voted' ) || ( ( cbUSerRatingCookie instanceof Array ) && ( cbUSerRatingCookie.indexOf( cbUserRatingPId ) > -1 ) ) ) {
                return;
            }

            if  ( cbVoteOverlay.length ) {

                cbExistingOverlaySpan = cbVoteOverlay.find('span');
                cbNotVoted = cbThisUV.find('.cb-overlay');
                cbExistingOverlay = cbExistingOverlaySpan.css('width');

            } else {

                cbVoteOverlay = cbThisUV.find('.cb-overlay-stars');
                cbNotVoted = cbThisUV.find('.cb-overlay-stars');
                cbExistingOverlaySpan = cbVoteOverlay.find('span');
                cbExistingOverlay = cbExistingOverlaySpan.css('width');

                if (cbExistingOverlay !== '125px') {  cbExistingOverlaySpan.addClass('cb-zero-stars-trigger'); }
            }

            cbNotVoted.on('mousemove click mouseleave mouseenter', function(e) {

                var cbParentOffset = $(this).parent().offset(),
                    cbStarOffset = $(this).offset(),
                    cbFinalX,
                    cbBaseX,
                    cbWidthDivider = cbThisUV.width() / 100,
                    cbStarWidthDivider = cbVoteOverlay.width() / 100;

                if ( cbThisUV.hasClass('stars') ) {

                    if (Math.round(cbStarOffset.left) <= e.pageX) {

                        cbBaseX = Math.round( ( ( e.pageX - Math.round(cbStarOffset.left) ) / cbStarWidthDivider )   );
                        cbFinalX = ( Math.round( cbBaseX * 10 / 20) / 10 ).toFixed(1);

                        if ( cbFinalX < 0 ) { cbFinalX = 0; }
                        if ( cbFinalX > 5 ) { cbFinalX = 5; }

                        if ( cbBodyRTL === true ) {
                            cbOverlaySpan = cbBaseX ;
                        } else {
                            cbOverlaySpan = ( 100 - cbBaseX );
                        }
                    }

                } else {

                    cbBaseX = Math.ceil((e.pageX - cbParentOffset.left) / cbWidthDivider);
                    if ( cbBodyRTL === true ) {
                        cbOverlaySpan = ( 100 - cbBaseX );
                    } else {
                        cbOverlaySpan = cbBaseX;
                    }
                }

                if ( cbThisUV.hasClass('points') ) {
                    if ( cbBodyRTL === true ) {
                        cbFinalX = ( ( 100 - cbBaseX ) / 10).toFixed(1);
                    } else {
                        cbFinalX = (cbBaseX / 10).toFixed(1);
                    }
                    cbCriteriaAverage.text(cbFinalX);
                } else if ( cbThisUV.hasClass('percentage') ) {

                    if ( cbBodyRTL === true ) {
                        cbFinalX = ( 100 - cbBaseX ) + '%';
                    } else {
                        cbFinalX = cbBaseX + '%';
                    }

                    cbCriteriaAverage.text(cbFinalX);
                }

                if ( cbExistingOverlaySpan.hasClass('cb-bar-ani') ) { cbExistingOverlaySpan.removeClass('cb-bar-ani'); }
                if ( cbExistingOverlaySpan.hasClass('cb-bar-ani-stars') ) { cbExistingOverlaySpan.removeClass('cb-bar-ani-stars').css( 'width', (100 - (cbBaseX) +'%') ); }
                if ( cbOverlaySpan > 100 ) { cbOverlaySpan = 100; }
                if ( cbOverlaySpan < 1 ) { cbOverlaySpan = 0; }

                cbExistingOverlaySpan.css( 'width', cbOverlaySpan + '%' );

                if ( e.type == 'mouseenter' ) {
                    cbVoteCriteria.fadeOut(75, function () {
                        $(this).fadeIn(75).text( cbYourRatingText );
                    });
                }
                if ( e.type == 'mouseleave' ) {
                    cbExistingOverlaySpan.animate( {'width': cbExistingOverlay}, 300);
                    cbCriteriaAverage.text(cbExistingScore);
                    cbVoteCriteria.fadeOut(75, function () {
                        $(this).fadeIn(75).html(cbExistingVoteLine);
                    });
                }

                if ( e.type == 'click' ) {
                    cbNonce = cbThisUV.attr('data-cb-nonce');
                    if ( cbThisUV.hasClass('points') ) { cbFinalX = cbFinalX * 10; }
                    if ( cbThisUV.hasClass('stars') ) { cbFinalX = cbFinalX * 20; }

                    cbParentOffset = $(this).parent().offset();

                    cbVoteOverlay.off('mousemove click mouseleave mouseenter');

                    $.ajax({
                        type : "POST",
                        data : { action: 'cb_a_s', cburNonce: cbNonce, cbNewScore: parseInt(cbFinalX), cbPostID: cbVotePid },
                        url: cbScripts.cbUrl,
                        dataType:"json",
                        success : function( data ){

                            var cb_score = data[0],
                                cbVotesText = data[2];

                            cbVoteCriteria.fadeOut(550, function () {  $(this).fadeIn(550).html(cbExistingVoteLine).find('.cb-votes-count').html(cbVotesText); });

                            if ( ( cb_score !== '-1' ) && ( cb_score !=='null' ) ) {

                                if ( cbThisUV.hasClass('points') ) {

                                    cbCriteriaAverage.html( (cb_score / 10).toFixed(1) );

                                } else if ( cbThisUV.hasClass('percentage') ) {

                                    cbCriteriaAverage.html(cb_score + '%');

                                } else {
                                    cb_score = 100 - cb_score;
                            }
                                cbExistingOverlaySpan.css( 'width', cb_score +'%' );
                                cbThisUV.addClass('cb-voted cb-tip-bot').off('click');
                            }

                            cbThisUV.tipper({
                                direction: 'bottom',
                                follow: true
                            });


                            if ( cookie.enabled() ) {
                                Cookies.set('cb_user_rating', data[3], { expires: 14 });
                            }

                        },
                        error : function(jqXHR, textStatus, errorThrown) {
                            console.log("cbur " + jqXHR + " :: " + textStatus + " :: " + errorThrown);
                        }
                    });

                    return false;
                }
            });
        });
    }

    var CbYTPlayerCheck = $('#cb-yt-player-' + cbEmbedIconData);

    function cbPlayYTVideo() {
        if ( ( cbMobileTablet === false ) && ( CbYTPlayerCheck.length > 0 ) ) {
            cbYTPlayerHolder.playVideo();
        }
    };

    function cbPauseYTVideo() {
        if ( ( cbMobileTablet === false )  && ( CbYTPlayerCheck.length > 0 ) ) {
            cbYTPlayerHolder.pauseVideo();
        }
    };

})(jQuery);

var cbYTPlayerHolder,
cbEmbedIconData = jQuery('.cb-embed-icon').data('cb-pid'),
CbYTPlayer = jQuery('#cb-yt-player-' + cbEmbedIconData),
cbYouTubeVideoID = CbYTPlayer.text();

if ( CbYTPlayer.length > 0 ) {
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady() {
    if ( CbYTPlayer.length > 0 ) {
        cbYTPlayerHolder = new YT.Player('cb-yt-player-' + cbEmbedIconData, {
            videoId: cbYouTubeVideoID
        });
    }
}