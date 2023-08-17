"use strict";
(() => {
var exports = {};
exports.id = 570;
exports.ids = [570];
exports.modules = {

/***/ 4607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tour_details)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/GallerySection.js
var GallerySection = __webpack_require__(3278);
// EXTERNAL MODULE: ./src/sliderProps.js
var sliderProps = __webpack_require__(5968);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/components/sliders/RelatedTours.js





class RelatedTours extends external_react_.Component {
    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "related-tour-place wow fadeInUp",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-8",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "section-title mb-35",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Related Tours"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "place-arrows mb-35",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "prev slick-arrow",
                                        onClick: this.previous,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "far fa-arrow-left"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "next slick-arrow",
                                        onClick: this.next,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "far fa-arrow-right"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                    ...sliderProps/* recentPlaceSlider */.pH,
                    ref: (c)=>this.slider = c,
                    className: "recent-place-slider",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "single-place-item mb-60",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "place-img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/place/place-1.jpg",
                                        alt: "Place Image"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "place-content",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "info",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "ratings",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-star"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-star"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-star"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-star"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-star"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "(4.9)"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "title",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "/tour-details",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Man and Woman Walks on Dock"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "location",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-map-marker-alt"
                                                    }),
                                                    "North Province, Maldives"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "price",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-usd-circle"
                                                    }),
                                                    "Price",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "currency",
                                                        children: "$"
                                                    }),
                                                    "93.65"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "meta",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "far fa-clock"
                                                            }),
                                                            "05 Days"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "far fa-user"
                                                            }),
                                                            "25"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "/tour-details",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                children: [
                                                                    "Details",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "far fa-long-arrow-right"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "single-place-item mb-60",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "place-img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/place/place-2.jpg",
                                        alt: "Place Image"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "place-content",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "info",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "ratings",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-star"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-star"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-star"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-star"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-star"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "(4.9)"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "title",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "/tour-details",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Trees Under White Clouds during Daytime"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "location",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-map-marker-alt"
                                                    }),
                                                    "North Province, Maldives"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "price",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-usd-circle"
                                                    }),
                                                    "Price",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "currency",
                                                        children: "$"
                                                    }),
                                                    "93.65"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "meta",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "far fa-clock"
                                                            }),
                                                            "05 Days"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "far fa-user"
                                                            }),
                                                            "25"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "/tour-details",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                children: [
                                                                    "Details",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "far fa-long-arrow-right"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "single-place-item mb-60",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "place-img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/place/place-3.jpg",
                                        alt: "Place Image"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "place-content",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "info",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "ratings",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-star"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-star"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-star"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-star"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-star"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "(4.9)"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "title",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "/tour-details",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Body of Water Near Mountain"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "location",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-map-marker-alt"
                                                    }),
                                                    "North Province, Maldives"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "price",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-usd-circle"
                                                    }),
                                                    "Price",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "currency",
                                                        children: "$"
                                                    }),
                                                    "93.65"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "meta",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "far fa-clock"
                                                            }),
                                                            "05 Days"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "far fa-user"
                                                            }),
                                                            "25"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "/tour-details",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                children: [
                                                                    "Details",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "far fa-long-arrow-right"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
}

// EXTERNAL MODULE: ./src/layout/Layout.js + 14 modules
var Layout = __webpack_require__(6234);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./pages/tour-details.jsx








const TourDetails = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        extraClass: "pt-160",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "place-details-section",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "place-slider-area overflow-hidden wow fadeInUp",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                            ...sliderProps/* placeSlider */.A8,
                            className: "place-slider",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "place-slider-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "place-img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/place/single-place-1.jpg",
                                            alt: "Place Image"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "place-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "place-img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/place/single-place-2.jpg",
                                            alt: "Place Image"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "place-slider-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "place-img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/place/single-place-3.jpg",
                                            alt: "Place Image"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "place-slider-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "place-img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/place/single-place-2.jpg",
                                            alt: "Place Image"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "tour-details-wrapper pt-80",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "tour-title-wrapper pb-30 wow fadeInUp",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "tour-title mb-20",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "title",
                                                            children: "Boat Traveling on Made River"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-map-marker-alt"
                                                                }),
                                                                "Tambon Khlong Sok, Thailand"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "tour-widget-info",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "info-box mb-20",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fal fa-box-usd"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "info",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: "From"
                                                                            }),
                                                                            "$96.54"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "info-box mb-20",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fal fa-clock"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "info",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: "Durations"
                                                                            }),
                                                                            "7 Days"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "info-box mb-20",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fal fa-planet-ringed"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "info",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: "Tour Type"
                                                                            }),
                                                                            "City Tour"
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
                                    className: "tour-area-nav pt-20 pb-20 wow fadeInUp",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row align-items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "ratings-box",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "ratings",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-star"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-star"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-star"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-star"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-star"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: "(3k Riviews)"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-8",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "share-nav",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: "#",
                                                            children: [
                                                                "Share",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-share"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: "#",
                                                            children: [
                                                                "Reviews",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-share"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: "#",
                                                            children: [
                                                                "Whislist",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-heart"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "col-xl-8",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "place-content-wrap pt-45 wow fadeInUp",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "title",
                                                            children: "Explore Tours"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Sed ut perspiciatis unde omniste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ip quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si amet consectetur adipisci velit sed quian numquam eius modi tempora incidunt ut labore dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam qunostrum exercitationem ullam corporis suscipit laboriosaey nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur veillum qui dolorem voluptas nulla pariatur"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            children: "Advance Facilities"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Neque porro quisquam est dolorem ipsum quia dolor si amet consectetur adipisci velit sed quian numquam eius tempora incidunt labore dolore magnam aliquam quaerat voluptatem."
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "row align-items-lg-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "col-lg-5",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        className: "check-list",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fas fa-badge-check"
                                                                                    }),
                                                                                    "Parking in the Camp"
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fas fa-badge-check"
                                                                                    }),
                                                                                    "Pick and Drop Services"
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fas fa-badge-check"
                                                                                    }),
                                                                                    "Washing Machines"
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fas fa-badge-check"
                                                                                    }),
                                                                                    "Cruise Dinner & Music Event"
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fas fa-badge-check"
                                                                                    }),
                                                                                    "Visit 5 Best Places With Group"
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fas fa-badge-check"
                                                                                    }),
                                                                                    "Motorhome service"
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fas fa-badge-check"
                                                                                    }),
                                                                                    "1 Meal Per Day"
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "col-lg-7",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "assets/images/place/single-place-4.jpg",
                                                                        className: "mb-20 w-100",
                                                                        alt: "place image"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            children: "Tour Plan"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel eillum qui dolorem eum fugiat quo voluptas nulla pariatur"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Tab.Container, {
                                                    defaultActiveKey: "day1",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "days-area mb-55 wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav, {
                                                                as: "ul",
                                                                className: "nav nav-tabs mb-35",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                                                                        as: "li",
                                                                        className: "nav-item",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                                                            as: "button",
                                                                            className: "nav-link",
                                                                            eventKey: "day1",
                                                                            children: "Day 1st"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                                                                        as: "li",
                                                                        className: "nav-item",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                                                            as: "button",
                                                                            className: "nav-link",
                                                                            eventKey: "day2",
                                                                            children: "Day 2nd"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                                                                        as: "li",
                                                                        className: "nav-item",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                                                            as: "button",
                                                                            className: "nav-link",
                                                                            eventKey: "day3",
                                                                            children: "Day 3rd"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                                                                        as: "li",
                                                                        className: "nav-item",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                                                            as: "button",
                                                                            className: "nav-link",
                                                                            eventKey: "day4",
                                                                            children: "Day 4th"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                                                                        as: "li",
                                                                        className: "nav-item",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                                                            as: "button",
                                                                            className: "nav-link",
                                                                            eventKey: "day5",
                                                                            children: "Day 5th"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Tab.Content, {
                                                                className: "tab-content",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Tab.Pane, {
                                                                        className: "tab-pane fade",
                                                                        eventKey: "day1",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "content-box",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    children: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magne doloreseos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si amet consectetur adipisci velit sed quian numquam eius modi tempora incidunt"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                    className: "check-list",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-badge-check"
                                                                                                }),
                                                                                                "Parking in the Camp"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-badge-check"
                                                                                                }),
                                                                                                "kayaking Sport"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-badge-check"
                                                                                                }),
                                                                                                "Mountain Hiking"
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Tab.Pane, {
                                                                        className: "tab-pane fade",
                                                                        eventKey: "day2",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "content-box",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    children: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magne doloreseos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si amet consectetur adipisci velit sed quian numquam eius modi tempora incidunt"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                    className: "check-list",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-badge-check"
                                                                                                }),
                                                                                                "Parking in the Camp"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-badge-check"
                                                                                                }),
                                                                                                "kayaking Sport"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-badge-check"
                                                                                                }),
                                                                                                "Mountain Hiking"
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Tab.Pane, {
                                                                        className: "tab-pane fade",
                                                                        eventKey: "day3",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "content-box",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    children: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magne doloreseos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si amet consectetur adipisci velit sed quian numquam eius modi tempora incidunt"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                    className: "check-list",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-badge-check"
                                                                                                }),
                                                                                                "Parking in the Camp"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-badge-check"
                                                                                                }),
                                                                                                "kayaking Sport"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-badge-check"
                                                                                                }),
                                                                                                "Mountain Hiking"
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Tab.Pane, {
                                                                        className: "tab-pane fade",
                                                                        eventKey: "day4",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "content-box",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    children: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magne doloreseos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si amet consectetur adipisci velit sed quian numquam eius modi tempora incidunt"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                    className: "check-list",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-badge-check"
                                                                                                }),
                                                                                                "Parking in the Camp"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-badge-check"
                                                                                                }),
                                                                                                "kayaking Sport"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-badge-check"
                                                                                                }),
                                                                                                "Mountain Hiking"
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Tab.Pane, {
                                                                        className: "tab-pane fade",
                                                                        eventKey: "day5",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "content-box",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    children: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magne doloreseos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si amet consectetur adipisci velit sed quian numquam eius modi tempora incidunt"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                    className: "check-list",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-badge-check"
                                                                                                }),
                                                                                                "Parking in the Camp"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-badge-check"
                                                                                                }),
                                                                                                "kayaking Sport"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-badge-check"
                                                                                                }),
                                                                                                "Mountain Hiking"
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
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "map-box mb-60 wow fadeInUp",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                                        src: "https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "calendar-wrapper wow fadeInUp",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "calendar-container mb-45"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(RelatedTours, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "reviews-wrapper mb-60 wow fadeInUp",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "reviews-inner-box",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "rating-value",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        children: "Clients Reviews"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "rate-score",
                                                                        children: "4.9"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        className: "ratings",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fas fa-star"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fas fa-star"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fas fa-star"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fas fa-star"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fas fa-star"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "#",
                                                                                    children: "(4.9)"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "reviews",
                                                                        children: "3k Reviews"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "reviews-progress",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "single-progress-bar",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "progress-title",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                                    children: [
                                                                                        "Quality ",
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            className: "rate",
                                                                                            children: "4.8"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "progress",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "progress-bar wow slideInLeft",
                                                                                    style: {
                                                                                        width: "85%"
                                                                                    }
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "single-progress-bar",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "progress-title",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                                    children: [
                                                                                        "Team Member",
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            className: "rate",
                                                                                            children: "4.6"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "progress",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "progress-bar wow slideInLeft",
                                                                                    style: {
                                                                                        width: "75%"
                                                                                    }
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "single-progress-bar",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "progress-title",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                                    children: [
                                                                                        "Locations",
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            className: "rate",
                                                                                            children: "4.7"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "progress",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "progress-bar wow slideInLeft",
                                                                                    style: {
                                                                                        width: "90%"
                                                                                    }
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "single-progress-bar",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "progress-title",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                                    children: [
                                                                                        "Cost",
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            className: "rate",
                                                                                            children: "4.9"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "progress",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "progress-bar wow slideInLeft",
                                                                                    style: {
                                                                                        width: "95%"
                                                                                    }
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "comments-area wow fadeInUp",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "comment-list",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "comment",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "comment-avatar",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                    src: "assets/images/place/comment-1.jpg",
                                                                                    alt: "comment author"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "comment-wrap",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "comment-author-content",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                            className: "author-name",
                                                                                            children: [
                                                                                                "Glenn M. Whitaker",
                                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                                    className: "time",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "far fa-clock"
                                                                                                        }),
                                                                                                        "5 Minute Ago"
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            className: "position",
                                                                                            children: "CEO & Founder"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                            className: "comment-rating-ul",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            className: "title",
                                                                                                            children: "Quality"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        })
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            className: "title",
                                                                                                            children: "Location"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        })
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            className: "title",
                                                                                                            children: "Services"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        })
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            className: "title",
                                                                                                            children: "Team"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        })
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            className: "title",
                                                                                                            children: "Price"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                className: "fas fa-star"
                                                                                                            })
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                            children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepture"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                            href: "#",
                                                                                            className: "btn-link",
                                                                                            children: [
                                                                                                "Reply",
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "far fa-angle-double-right"
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                        className: "comment-reply",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "comment",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                        className: "comment-avatar",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                            src: "assets/images/place/comment-2.jpg",
                                                                                            alt: "comment author"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                        className: "comment-wrap",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                            className: "comment-author-content",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                                    className: "author-name",
                                                                                                    children: [
                                                                                                        "Glenn M. Whitaker",
                                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                                            className: "time",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                    className: "far fa-clock"
                                                                                                                }),
                                                                                                                "5 Minute Ago"
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                    className: "position",
                                                                                                    children: "CEO & Founder"
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                                    className: "comment-rating-ul",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    className: "title",
                                                                                                                    children: "Quality"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                })
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    className: "title",
                                                                                                                    children: "Location"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                })
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    className: "title",
                                                                                                                    children: "Services"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                })
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    className: "title",
                                                                                                                    children: "Team"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                })
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    className: "title",
                                                                                                                    children: "Price"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                        className: "fas fa-star"
                                                                                                                    })
                                                                                                                })
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                                    children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepture"
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                                    href: "#",
                                                                                                    className: "btn-link",
                                                                                                    children: [
                                                                                                        "Reply",
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "far fa-angle-double-right"
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "comment",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "comment-avatar",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "assets/images/place/comment-3.jpg",
                                                                                alt: "comment author"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "comment-wrap",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "comment-author-content",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                        className: "author-name",
                                                                                        children: [
                                                                                            "Glenn M. Whitaker",
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                                className: "time",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "far fa-clock"
                                                                                                    }),
                                                                                                    "5 Minute Ago"
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "position",
                                                                                        children: "CEO & Founder"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                        className: "comment-rating-ul",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        className: "title",
                                                                                                        children: "Quality"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        className: "title",
                                                                                                        children: "Location"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        className: "title",
                                                                                                        children: "Services"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        className: "title",
                                                                                                        children: "Team"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        className: "title",
                                                                                                        children: "Price"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                            className: "fas fa-star"
                                                                                                        })
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepture"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                        href: "#",
                                                                                        className: "btn-link",
                                                                                        children: [
                                                                                            "Reply",
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "far fa-angle-double-right"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "comments-respond mb-30 wow fadeInUp",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "comments-heading",
                                                            style: {
                                                                marginBottom: 15
                                                            },
                                                            children: "Leave a Comments"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "comment-rating-ul mb-20",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "title",
                                                                            children: "Quality"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "title",
                                                                            children: "Location"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "title",
                                                                            children: "Services"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "title",
                                                                            children: "Team"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "title",
                                                                            children: "Price"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                            onSubmit: (e)=>e.preventDefault(),
                                                            className: "comment-form",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "row",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-lg-6",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "form_group",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                type: "email",
                                                                                className: "form_control",
                                                                                placeholder: "Email Address",
                                                                                name: "name",
                                                                                required: true
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-lg-6",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "form_group",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                type: "text",
                                                                                className: "form_control",
                                                                                placeholder: "Enter Name",
                                                                                name: "email",
                                                                                required: true
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-lg-12",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "form_group",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                                                name: "message",
                                                                                className: "form_control",
                                                                                rows: 4,
                                                                                placeholder: "Write Comments",
                                                                                defaultValue: ""
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-lg-12",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "form_group",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                                className: "main-btn primary-btn",
                                                                                children: [
                                                                                    "Send comments",
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fas fa-angle-double-right"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-xl-4",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "sidebar-widget-area pt-60 pl-lg-30",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "sidebar-widget booking-form-widget wow fadeInUp mb-40",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "widget-title",
                                                                children: "Booking Tour"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                                onSubmit: (e)=>e.preventDefault(),
                                                                className: "sidebar-booking-form",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "booking-date-time mb-20",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "booking-item",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                        children: "Date"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                        className: "bk-item booking-time",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "far fa-calendar-alt"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                                type: "text",
                                                                                                placeholder: "Select Date",
                                                                                                className: "datepicker"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "booking-item",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                        children: "Time"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                        className: "bk-item booking-date",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "far fa-calendar-alt"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                                                                className: "wide",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 1,
                                                                                                        children: "12.00 Am"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 1,
                                                                                                        children: "01.00 Am"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 1,
                                                                                                        children: "02.00 Am"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 1,
                                                                                                        children: "03.00 Am"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 1,
                                                                                                        children: "04.00 Am"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 1,
                                                                                                        children: "05.00 Am"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 1,
                                                                                                        children: "06.00 Am"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 1,
                                                                                                        children: "07.00 Am"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 1,
                                                                                                        children: "08.00 Am"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 1,
                                                                                                        children: "09.00 Am"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 1,
                                                                                                        children: "10.00 Am"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 1,
                                                                                                        children: "11.00 Am"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 1,
                                                                                                        children: "12.00 Pm"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "booking-guest-box mb-20",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                                className: "mb-20",
                                                                                children: "Tickets"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "booking-item",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                        children: "Adult (18+ years) $43"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                        className: "bk-item booking-user",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "far fa-user"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                                                                className: "wide",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 1,
                                                                                                        children: "1"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 2,
                                                                                                        children: "2"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 3,
                                                                                                        children: "3"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 4,
                                                                                                        children: "4"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 5,
                                                                                                        children: "5"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "booking-item",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                        children: "Youth (13-17 years) $29"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                        className: "bk-item booking-user",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "far fa-user"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                                                                className: "wide",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 1,
                                                                                                        children: "1"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 2,
                                                                                                        children: "2"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 3,
                                                                                                        children: "3"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 4,
                                                                                                        children: "4"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 5,
                                                                                                        children: "5"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "booking-item",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                        children: "Child (0-12 years) $0"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                        className: "bk-item booking-user",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "far fa-user"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                                                                className: "wide",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 1,
                                                                                                        children: "1"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 2,
                                                                                                        children: "2"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 3,
                                                                                                        children: "3"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 4,
                                                                                                        children: "4"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                                        value: 5,
                                                                                                        children: "5"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "booking-extra mb-15 wow fadeInUp",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                                className: "mb-10",
                                                                                children: "Aditional Services"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "extra",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fas fa-check-circle"
                                                                                    }),
                                                                                    "Service Per Boooking",
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                className: "currency",
                                                                                                children: "$"
                                                                                            }),
                                                                                            "50"
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "extra",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fas fa-check-circle"
                                                                                    }),
                                                                                    "Service Per Person",
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                className: "currency",
                                                                                                children: "$"
                                                                                            }),
                                                                                            "20"
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "booking-total mb-20",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "total",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                    children: "Total"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                    className: "price",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            className: "currency",
                                                                                            children: "$"
                                                                                        }),
                                                                                        "70"
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "submit-button",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                            className: "main-btn primary-btn",
                                                                            children: [
                                                                                "Booking Now",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "far fa-paper-plane"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "sidebar-widget booking-info-widget wow fadeInUp mb-40",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "widget-title",
                                                                children: "Tour Information"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "info-list",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "far fa-user-circle"
                                                                                }),
                                                                                "Max Guests",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: "35"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "far fa-user-circle"
                                                                                }),
                                                                                "Minimum Age",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: "12+"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "far fa-map-marker-alt"
                                                                                }),
                                                                                "Tour Location",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: "Thailand"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "far fa-globe"
                                                                                }),
                                                                                "Language",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: "English"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "sidebar-widget recent-place-widget mb-40 wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "widget-title",
                                                                children: "Last Minute Deals"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "recent-place-list",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        className: "place-thumbnail-content",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "assets/images/place/thumb-1.jpg",
                                                                                alt: "post thumb"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "place-content",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                        className: "ratings",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-star"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-star"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-star"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-star"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "far fa-star"
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                            legacyBehavior: true,
                                                                                            href: "/tour-details",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                children: "Infinity Pool Nears Beach"
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                        className: "price",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                className: "text",
                                                                                                children: "From :"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                className: "currency",
                                                                                                children: "$"
                                                                                            }),
                                                                                            "45.23"
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        className: "place-thumbnail-content",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "assets/images/place/thumb-2.jpg",
                                                                                alt: "post thumb"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "place-content",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                        className: "ratings",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-star"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-star"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-star"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-star"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-star-half-alt"
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                            legacyBehavior: true,
                                                                                            href: "/tour-details",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                children: "Infinity Pool Nears Beach"
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                        className: "price",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                className: "text",
                                                                                                children: "From :"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                className: "currency",
                                                                                                children: "$"
                                                                                            }),
                                                                                            "45.23"
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        className: "place-thumbnail-content",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "assets/images/place/thumb-3.jpg",
                                                                                alt: "post thumb"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "place-content",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                        className: "ratings",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-star"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-star"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-star"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-star"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                    className: "fas fa-star"
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                            legacyBehavior: true,
                                                                                            href: "/tour-details",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                children: "Infinity Pool Nears Beach"
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                        className: "price",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                className: "text",
                                                                                                children: "From :"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                className: "currency",
                                                                                                children: "$"
                                                                                            }),
                                                                                            "45.23"
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "sidebar-widget sidebar-banner-widget wow fadeInUp mb-40",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "banner-widget-content",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "banner-img",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "assets/images/blog/banner-1.jpg",
                                                                        alt: "Post Banner"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "hover-overlay",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "hover-content",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                                    className: "title",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        href: "#",
                                                                                        children: "Swimming Pool"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                            className: "fas fa-map-marker-alt"
                                                                                        }),
                                                                                        "Marrakesh, Morocco"
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
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
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(GallerySection/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const tour_details = (TourDetails);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 9051:
/***/ ((module) => {

module.exports = require("react-nice-select");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,234,968,278], () => (__webpack_exec__(4607)));
module.exports = __webpack_exports__;

})();