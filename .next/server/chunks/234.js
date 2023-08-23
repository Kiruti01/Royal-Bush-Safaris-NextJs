"use strict";
exports.id = 234;
exports.ids = [234];
exports.modules = {

/***/ 6234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-nice-select"
var external_react_nice_select_ = __webpack_require__(9051);
var external_react_nice_select_default = /*#__PURE__*/__webpack_require__.n(external_react_nice_select_);
;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/ImageView.js



const ImgViews = ({ close , src  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: ` popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const [img, setImg] = (0,external_react_.useState)(false);
    const [imgValue, setImgValue] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("assets/images")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime_.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const components_ImageView = (ImageView);

;// CONCATENATED MODULE: ./src/components/VideoPopup.js



const VideoPopup_ = ({ close , videoID  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close(),
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                        src: "https://www.youtube.com/embed/nfP5N9Yc72A?autoplay=1",
                                        title: "YouTube video player",
                                        frameBorder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const VideoPopup = ()=>{
    const [video, setVideo] = (0,external_react_.useState)(false);
    const [videoValue, setVideoValue] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("https://www.youtube.com")) {
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        setVideoValue(a.href);
                        setVideo(true);
                    });
                }
            });
        }, 1000);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: video && /*#__PURE__*/ jsx_runtime_.jsx(VideoPopup_, {
            close: ()=>setVideo(false),
            videoID: videoValue
        })
    });
};
/* harmony default export */ const components_VideoPopup = (VideoPopup);

;// CONCATENATED MODULE: ./src/utils.js
// Sticky nav
const stickyNav = ()=>{
    window.addEventListener("scroll", ()=>{
        let offset = window.scrollY;
        const sticky = document.querySelectorAll(".header-navigation");
        for(let i = 0; i < sticky.length; i++){
            const stick = sticky[i];
            if (stick) {
                if (offset > 10) {
                    stick.classList.add("sticky");
                } else {
                    stick.classList.remove("sticky");
                }
            }
        }
    });
};
// animation
const animation = ()=>{
    if (false) {}
    new WOW.WOW().init();
};

;// CONCATENATED MODULE: ./src/layout/Footer.js

const Footer = ({ bg , extraClass  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: `main-footer ${bg ? bg : "black"}-bg ${extraClass ? extraClass : ""}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-cta pt-80 pb-40",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "single-cta-item pr-lg-60 mb-40",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/icon/support.png",
                                                alt: "Icon"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "title",
                                                    children: "Need Any Support For Tour & Travels ?"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "icon-btn",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "far fa-long-arrow-right"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "single-cta-item pl-lg-60 mb-40",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/icon/travel.png",
                                                alt: "Icon"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "title",
                                                    children: "Ready to Get Started With Vacations!"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "icon-btn",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "far fa-long-arrow-right"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-widget-area pt-75 pb-30",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-md-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget about-company-widget mb-40",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "widget-title",
                                            children: "Royal Bush Safaris"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "footer-content",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "footer-logo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: bg === "gray" ? "assets/images/logo/logo-black.png" : "assets/images/logo/logo-white.png",
                                                    alt: "Site Logo"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-5 col-md-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget service-nav-widget mb-40 pl-lg-70",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "widget-title",
                                            children: "Services"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "footer-content",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "footer-widget-nav",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "SGR Pakages"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Maasai mara safari"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Beach holidays"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Wild Tent Camping"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Desert Safari"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 col-md-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget footer-newsletter-widget mb-40 pl-lg-100",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "widget-title",
                                            children: "Cant wait to go for that Vacation?"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Talk to us!"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "form_group",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-paper-plane"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "email",
                                                                className: "form_control",
                                                                placeholder: "Email Address",
                                                                name: "email",
                                                                required: true
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-copyright",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-text",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Copy@ 2023 ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: {
                                                    color: "#F7921E"
                                                },
                                                children: "Royal Bush Safaris"
                                            }),
                                            ", All Right Reserved"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-nav float-lg-end"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layout_Footer = (Footer);

;// CONCATENATED MODULE: ./src/useWindowSize.js

function useWindowSize() {
    const isSSR = "undefined" === "undefined";
    const [windowSize, setWindowSize] = external_react_default().useState({
        width: isSSR ? 1200 : window.innerWidth,
        height: isSSR ? 800 : window.innerHeight
    });
    function changeWindowSize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
    external_react_default().useEffect(()=>{
        window.addEventListener("resize", changeWindowSize);
        return ()=>{
            window.removeEventListener("resize", changeWindowSize);
        };
    }, []);
    return windowSize;
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/layout/SearchModal.js


const SearchModal = ({ show , handleClose  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal, {
        show: show,
        onHide: handleClose,
        className: "modal fade search-modal",
        "aria-modal": "true",
        role: "dialog",
        centered: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
            onSubmit: (e)=>e.preventDefault(),
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "form_group",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        className: "form_control",
                        placeholder: "Search here",
                        name: "search"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa fa-search"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const layout_SearchModal = (SearchModal);

;// CONCATENATED MODULE: ./src/layout/Menu.js




const Menu = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DeskTopMenu, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(MobileMenu, {})
        ]
    });
};
/* harmony default export */ const layout_Menu = (Menu);
const DeskTopMenu = ()=>{
    const [searchModal, setSearchModal] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_SearchModal, {
                show: searchModal,
                handleClose: ()=>setSearchModal(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "main-menu d-none d-xl-block",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "tour",
                                children: "Tours"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "menu-item has-children",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#",
                                    children: [
                                        "Destination",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "dd-trigger",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "far fa-angle-down"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "sub-menu",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "destination",
                                                children: "Destinations"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "nairobi-park",
                                                children: "NAIROBI NATIONAL PARK & GIRAFFE PARK"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "Kereita",
                                                children: "KEREITA ZIPLINING ADVENTURE"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "nkasiri",
                                                children: "NKASIRI ADVENTURE PARK"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "Mara",
                                                children: "2DAYS MAASAI MARA"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "prideinn",
                                                children: "3 DAYS 2 NIGHTS PRIDEINN HOTELS"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "neptune",
                                                children: "3 DAYS NEPTUNE MARA RIANTA FLYING PACKAGE"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "Ngare",
                                                children: "\uD835\uDC0D\uD835\uDC20\uD835\uDC1A\uD835\uDC2B\uD835\uDC1E \uD835\uDC0D\uD835\uDC1D\uD835\uDC1A\uD835\uDC2B\uD835\uDC1E \uD835\uDC03\uD835\uDC1A\uD835\uDC32 \uD835\uDC13\uD835\uDC2B\uD835\uDC22\uD835\uDC29"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "menu-item search-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "search-btn",
                                "data-bs-toggle": "modal",
                                "data-bs-target": "#search-modal",
                                onClick: ()=>setSearchModal(true),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "far fa-search"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
const MobileMenu = ()=>{
    const [activeMenu, setActiveMenu] = (0,external_react_.useState)("");
    const activeMenuSet = (value)=>setActiveMenu(activeMenu === value ? "" : value), activeLi = (value)=>value === activeMenu ? {
            display: "block"
        } : {
            display: "none"
        };
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "main-menu d-block d-xl-none",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "tour",
                        children: "Tours"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "menu-item has-children",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "#",
                            children: [
                                "Destination",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "dd-trigger",
                                    onClick: ()=>activeMenuSet("Destination"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "far fa-angle-down"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "sub-menu",
                            style: activeLi("Destination"),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "destination",
                                        children: "Destination"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "nairobi-park",
                                        children: "NAIROBI NATIONAL PARK & GIRAFFE PARK"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "Kereita",
                                        children: "KEREITA ZIPLINING ADVENTURE"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "nkasiri",
                                        children: "NKASIRI ADVENTURE PARK"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "Mara",
                                        children: "2DAYS MAASAI MARA"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "prideinn",
                                        children: "3 DAYS 2 NIGHTS PRIDEINN HOTELS"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "neptune",
                                        children: "3 DAYS NEPTUNE MARA RIANTA FLYING PACKAGE"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "Ngare",
                                        children: "\uD835\uDC0D\uD835\uDC20\uD835\uDC1A\uD835\uDC2B\uD835\uDC1E \uD835\uDC0D\uD835\uDC1D\uD835\uDC1A\uD835\uDC2B\uD835\uDC1E \uD835\uDC03\uD835\uDC1A\uD835\uDC32 \uD835\uDC13\uD835\uDC2B\uD835\uDC22\uD835\uDC29"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "menu-item search-item",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "search-btn",
                        "data-bs-toggle": "modal",
                        "data-bs-target": "#search-modal",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "far fa-search"
                        })
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/layout/header/DefaultHeader.js



const DefaultHeader = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "header-area header-three",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-top-bar pt-30 pb-30",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-3 d-none d-xl-block",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "site-brading",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        legacyBehavior: true,
                                        href: "/index-3",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "brand-logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/logo/logo-black.png",
                                                alt: "Logo"
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-9 col-lg-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "information-wrapper",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "single-info-item-two"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "single-info-item-two",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "inner-info",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-envelope"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "info",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "title",
                                                                        children: "Email Address"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "mailto:royalbushsafariske@gmail.com",
                                                                            children: "royalbushsafariske@gmail.com"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "single-info-item-two",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "inner-info",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-phone-plus"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "info",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "title",
                                                                        children: "Drop a Line"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "tel:+254115880418",
                                                                            children: "+254115880418"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header-navigation",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "nav-overlay"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "primary-menu gray-bg",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "site-brading d-block d-xl-none",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        legacyBehavior: true,
                                        href: "/index-3",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "brand-logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/logo/logo-black.png",
                                                alt: "Logo"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "nav-menu",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mobile-logo mb-30 d-block d-xl-none",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                legacyBehavior: true,
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "brand-logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/logo/logo-black.png",
                                                        alt: "Site Logo"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "nav-search mb-30 d-block d-xl-none ",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "form_group",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "email",
                                                            className: "form_control",
                                                            placeholder: "Search Here",
                                                            name: "email",
                                                            required: true
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "search-btn",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-search"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(layout_Menu, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "menu-button mt-40 d-xl-none",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                legacyBehavior: true,
                                                href: "/contact",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "main-btn secondary-btn",
                                                    children: [
                                                        "Book Now",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-paper-plane"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "nav-right-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "lang-dropdown",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                className: "wide",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: "English",
                                                        children: "English"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: "French",
                                                        children: "French"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "menu-button d-xl-block d-none",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                legacyBehavior: true,
                                                href: "/contact",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "main-btn primary-btn",
                                                    children: [
                                                        "Book Now",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-paper-plane"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "navbar-toggler",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const header_DefaultHeader = (DefaultHeader);

;// CONCATENATED MODULE: ./src/layout/header/Header1.js



const Header1 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "header-area header-one transparent-header",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "header-navigation navigation-white",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "nav-overlay"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "primary-menu",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "site-branding",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "brand-logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/logo/logo-white.png",
                                            alt: "Site Logo"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "nav-menu",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mobile-logo mb-30 d-block d-xl-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "brand-logo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/logo/logo-black.png",
                                                    alt: "Site Logo"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "nav-search mb-30 d-block d-xl-none ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "form_group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "email",
                                                        className: "form_control",
                                                        placeholder: "Search Here",
                                                        name: "email",
                                                        required: true
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "search-btn",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-search"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Menu, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "menu-button mt-40 d-xl-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/contact",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "main-btn secondary-btn",
                                                children: [
                                                    "Book Now",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-paper-plane"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "nav-right-item",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "menu-button d-xl-block d-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/contact",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "main-btn primary-btn",
                                                children: [
                                                    "Book Now",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-paper-plane"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "navbar-toggler",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const header_Header1 = (Header1);

;// CONCATENATED MODULE: ./src/layout/header/Header2.js



const Header2 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "header-area header-one transparent-header",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "header-navigation navigation-white",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "nav-overlay"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "primary-menu",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "site-branding",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "brand-logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/logo/logo-white.png",
                                            alt: "Site Logo"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "nav-menu",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mobile-logo mb-30 d-block d-xl-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "brand-logo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/logo/logo-black.png",
                                                    alt: "Site Logo"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "nav-search mb-30 d-block d-xl-none ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "form_group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "email",
                                                        className: "form_control",
                                                        placeholder: "Search Here",
                                                        name: "email",
                                                        required: true
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "search-btn",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-search"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Menu, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "menu-button mt-40 d-xl-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/contact",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "main-btn secondary-btn",
                                                children: [
                                                    "Book Now",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-paper-plane"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "nav-right-item",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "menu-button d-xl-block d-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/contact",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "main-btn primary-btn",
                                                children: [
                                                    "Book Now",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-paper-plane"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "navbar-toggler",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const header_Header2 = (Header2);

;// CONCATENATED MODULE: ./src/layout/header/Header3.js



const Header3 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "header-area header-three",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-top-bar pt-30 pb-30",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-3 d-none d-xl-block",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "site-brading",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        legacyBehavior: true,
                                        href: "/index-3",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "brand-logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/logo/logo-black.png",
                                                alt: "Logo"
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-9 col-lg-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "information-wrapper",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "single-info-item-two",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "inner-info",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-envelope"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "info",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "title",
                                                                        children: "Email Address"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "mailto:royalbushsafariske@gmail.com",
                                                                            children: "royalbushsafariske@gmail.com"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "single-info-item-two",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "inner-info",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-phone-plus"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "info",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "title",
                                                                        children: "Drop a Line"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "tel:+254115880418",
                                                                            children: "+254115880418"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header-navigation navigation-white",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "nav-overlay"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "primary-menu black-bg",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "site-brading d-block d-xl-none",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        legacyBehavior: true,
                                        href: "/index-3",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "brand-logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/logo/logo-white.png",
                                                alt: "Logo"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "nav-menu",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mobile-logo mb-30 d-block d-xl-none",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                legacyBehavior: true,
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "brand-logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/logo/logo-black.png",
                                                        alt: "Site Logo"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "nav-search mb-30 d-block d-xl-none ",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "form_group",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "email",
                                                            className: "form_control",
                                                            placeholder: "Search Here",
                                                            name: "email",
                                                            required: true
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "search-btn",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-search"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(layout_Menu, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "menu-button mt-40 d-xl-none",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                legacyBehavior: true,
                                                href: "/contact",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "main-btn secondary-btn",
                                                    children: [
                                                        "Book Now",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-paper-plane"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "nav-right-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "lang-dropdown",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                className: "wide",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: "English",
                                                        children: "English"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: "French",
                                                        children: "French"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "menu-button d-xl-block d-none",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                legacyBehavior: true,
                                                href: "/contact",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "main-btn primary-btn",
                                                    children: [
                                                        "Book Now",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-paper-plane"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "navbar-toggler",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const header_Header3 = (Header3);

;// CONCATENATED MODULE: ./src/layout/header/Header4.js



const Header4 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "header-area header-four transparent-header",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "header-navigation",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "nav-overlay"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "primary-menu",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "site-branding",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "brand-logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/logo/logo-black.png",
                                            alt: "Site Logo"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "nav-menu",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mobile-logo mb-30 d-block d-xl-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "brand-logo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/logo/logo-black.png",
                                                    alt: "Site Logo"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "nav-search mb-30 d-block d-xl-none ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "form_group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "email",
                                                        className: "form_control",
                                                        placeholder: "Search Here",
                                                        name: "email",
                                                        required: true
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "search-btn",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-search"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Menu, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "menu-button mt-40 d-xl-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/contact",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "main-btn secondary-btn",
                                                children: [
                                                    "Book Now",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-paper-plane"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "nav-right-item",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "menu-button d-xl-block d-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/contact",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "main-btn primary-btn",
                                                children: [
                                                    "Book Now",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-paper-plane"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "navbar-toggler",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const header_Header4 = (Header4);

;// CONCATENATED MODULE: ./src/layout/header/Index.js









const Header = ({ header  })=>{
    (0,external_react_.useEffect)(()=>{
        stickyNav();
    }, []);
    const { width  } = useWindowSize();
    (0,external_react_.useEffect)(()=>{
        const headers = document.querySelectorAll(".header-navigation");
        headers.forEach((header)=>{
            if (width <= 1199) {
                header.classList.add("breakpoint-on");
            } else {
                header.classList.remove("breakpoint-on");
            }
            // toggle
            const toggleBtn = header.getElementsByClassName("navbar-toggler")[0], overlay = header.getElementsByClassName("nav-overlay")[0], menu = header.getElementsByClassName("nav-menu")[0];
            toggleBtn.addEventListener("click", ()=>{
                overlay.classList.add("active");
                menu.classList.add("menu-on");
            });
            overlay.addEventListener("click", ()=>{
                overlay.classList.remove("active");
                menu.classList.remove("menu-on");
            });
        });
    }, [
        width
    ]);
    switch(header){
        case 1:
            return /*#__PURE__*/ jsx_runtime_.jsx(header_Header1, {});
        case 2:
            return /*#__PURE__*/ jsx_runtime_.jsx(header_Header2, {});
        case 3:
            return /*#__PURE__*/ jsx_runtime_.jsx(header_Header3, {});
        case 4:
            return /*#__PURE__*/ jsx_runtime_.jsx(header_Header4, {});
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(header_DefaultHeader, {});
    }
};
/* harmony default export */ const Index = (Header);

;// CONCATENATED MODULE: ./src/layout/Layout.js








const Layout = ({ header , children , footerBG , noFooter , extraClass  })=>{
    (0,external_react_.useEffect)(()=>{
        external_react_nice_select_default()();
    }, []);
    (0,external_react_.useEffect)(()=>{
        animation();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_VideoPopup, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_ImageView, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Index, {
                header: header
            }),
            children,
            !noFooter && /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {
                bg: footerBG,
                extraClass: extraClass
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ })

};
;