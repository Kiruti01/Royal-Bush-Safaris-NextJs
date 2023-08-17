"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "emailjs-com"
const external_emailjs_com_namespaceObject = require("emailjs-com");
var external_emailjs_com_default = /*#__PURE__*/__webpack_require__.n(external_emailjs_com_namespaceObject);
// EXTERNAL MODULE: ./src/components/PageBanner.js
var PageBanner = __webpack_require__(2745);
// EXTERNAL MODULE: ./src/layout/Layout.js + 14 modules
var Layout = __webpack_require__(6234);
;// CONCATENATED MODULE: ./pages/contact.jsx





const Contact = ()=>{
    const sendEmail = (e)=>{
        e.preventDefault();
        // Replace these with your EmailJS credentials
        const serviceID = "service_rw71g7a";
        const templateID = "template_jfn64xl";
        const userID = "JoTmjglHlNUvbu9nR";
        external_emailjs_com_default().sendForm(serviceID, templateID, e.target, userID).then((result)=>{
            console.log(result.text);
        }, (error)=>{
            console.log(error.text);
        });
        e.target.reset();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        extraClass: "pt-160",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PageBanner/* default */.Z, {
                pageTitle: "Contact Us"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "contact-info-section pt-100 pb-60",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-8",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section-title text-center mb-45 wow fadeInDown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sub-title",
                                            children: "Contact Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "Ready to Get Our Best Services! Feel Free to Contact With Us"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row justify-content-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-4 col-md-6 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "contact-info-item text-center mb-40 wow fadeInUp",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/icon/icon-1.png",
                                                    alt: "icon"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "title",
                                                        children: "Office Location"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Coming soon!"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-4 col-md-6 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "contact-info-item text-center mb-40 wow fadeInDown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/icon/icon-2.png",
                                                    alt: "icon"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "title",
                                                        children: "Email Address"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "mailto:royalbushsafariske@gmail.com",
                                                            children: "royalbushsafariske@gmail.com"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-4 col-md-6 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "contact-info-item text-center mb-40 wow fadeInUp",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/icon/icon-3.png",
                                                    alt: "icon"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "title",
                                                        children: "Hotline"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
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
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "contact-section pb-100",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section-title text-center mb-50 wow fadeInDown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sub-title",
                                            children: "Get In Touch"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "Send Us Message"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-10",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "contact-area wow fadeInUp",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                        className: "contact-form",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-6",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            placeholder: "Name",
                                                            className: "form_control",
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
                                                            placeholder: "Phone Number",
                                                            className: "form_control",
                                                            name: "number",
                                                            required: true
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-6",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "email",
                                                            placeholder: "Email Address",
                                                            className: "form_control",
                                                            name: "email",
                                                            required: true
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-6",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form_group text-center",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "form_group",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                                className: "form_control",
                                                                name: "package",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        value: "Package 1",
                                                                        children: " Nairobi National Park and Giraffe center"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        value: "Package 2",
                                                                        children: "Kereita Ziplining Adventure"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        value: "Package 3",
                                                                        children: "Nkasiri Adventure Park"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        value: "Package 4",
                                                                        children: "2 Days Masai Mara"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                            name: "message",
                                                            placeholder: "Write Message",
                                                            className: "form_control",
                                                            rows: 6,
                                                            defaultValue: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form_group text-center",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                            className: "main-btn primary-btn",
                                                            onClick: sendEmail,
                                                            children: [
                                                                "Send Us Message",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-paper-plane"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const contact = (Contact);


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
var __webpack_exports__ = __webpack_require__.X(0, [664,234,745], () => (__webpack_exec__(276)));
module.exports = __webpack_exports__;

})();