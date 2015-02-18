var visegrad;

WebFontConfig = {
    google: {families: ['Open+Sans:400,700:cyrillic-ext,latin']}
};

(function () {
    /******* Google Font Open Sans *******/
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);

    /******* CSS Style *******/
    var css = document.createElement('style');
    var cssText = document.createTextNode(".parldata-widget{background-color:#fff;border:1px solid #dedede;height:335px;min-width:200px;width:100%;max-width:470px;overflow-x:hidden;position:relative}.parldata-widget .visengard-widget-back-to-begin,.parldata-widget .visengard-widget-link{position:absolute;z-index:2;top:5px;display:block;width:20px;height:20px}.parldata-widget .visengard-widget-back-to-begin{right:10px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0NjVGQjg0QUM4NzExRTRBQTQxODkxMzBDREI4NEQ2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ0NjVGQjg1QUM4NzExRTRBQTQxODkxMzBDREI4NEQ2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDQ2NUZCODJBQzg3MTFFNEFBNDE4OTEzMENEQjg0RDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDQ2NUZCODNBQzg3MTFFNEFBNDE4OTEzMENEQjg0RDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7l2n6vAAACD0lEQVR42mL8//8/A7mAiYECgFPzHwaGx4+f/v35lWTNPxkYCqftm1mawvTnJmman/1kSK1bvrw5m+nbA0ZWFjya0eWOP/lZU9d1b89CEUFWTm4BBjYOYm1eeeZ1WlrevZ3ThYU5GZjYf/35x/D9Ox7NjJCo+sfAMHHTzRntlUxvzvPwCfxnYvnz9584B4Ohka6qlp6ykryWkqKYmhEWzW//M9RP3LFxcpUQx2dWTgEGBpBxjAwMv/8zfP/2/efPn39+fteS4gv3d05ITmKWRBjB+PTH/7iyGTeW14uJ8zNz8GNPM4yMH77++vXhjbOmWHd7hYhZOMSxxCWS//8FuVmFJKV23frcUt30+/FeQs5mZPz6+9+nt+9YGH+zsbGxc3CwsrL9ZWT++OptZZBaev9yBmZhnAH24+cfJwW2kIK859+lb1y/cfrUucf3Lv789vXjt18GXJ8WzasXtcgEuggBVpx+peOZpiAlaWygo6ap1xdt8f//c4jUhy8/Lz56Udq9VMvGX5iFb2dH5P//P4Ga/yLrP/b4h1Nik4KssrqmRnOYxf+fl/+jgiN3P2kHNFX76/z/eY/h39/faNLA8I+tXSYsoVHrq/H/58X/GODU5/91pZVfrh8Gav6DKf3j//+cqXurwz3+fTn7Hxu4cuPdi0eXGP7jAED3PHr05M+PL7gU/Pv/n3HAShKAAAMA8n2j2RREmCMAAAAASUVORK5CYII=) center center no-repeat}.parldata-widget .visengard-widget-link{right:40px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ3RjIzQ0QwQUM4NzExRTRBNDMyRDE1NzNGQTFBOTcxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ3RjIzQ0QxQUM4NzExRTRBNDMyRDE1NzNGQTFBOTcxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDdGMjNDQ0VBQzg3MTFFNEE0MzJEMTU3M0ZBMUE5NzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDdGMjNDQ0ZBQzg3MTFFNEE0MzJEMTU3M0ZBMUE5NzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5yEc79AAACzElEQVR42mL8//8/A17w5ubp8/df/2ZgldQ0NZQXQJH7jw/8vLy2yUlPQURIWEBQSNHApXvrTWRpPJp/n1hSbqUkJiKp4JteWZHmpyYtJK5u07rhEmHNZ5ZUWSmJ8vAJW8Y2X/n6//+nM42RZmJCAqKajm0w/Vg1/7qwvMpGQ05IVNI0suHcK6jo32cnaoONRPm5JHSDll54j1XzjzPLK23UZMSl5ewTmi+9RZV8f6Ej0UaSWyqyfesPTM33dk9wUuHjFRCziWu68AEk8ufT28+/4fLfN7WHyfMIBddu+Iqu+fejyYm2gvwybhmdp1+CBF7d3pMbYBdcsgjigqsry01kuQRkHXr3P8Rw9pdLNb46TJLm7bvAWv//OzM3V0lIUFxWM6J+9ct//78/PJzuouVWMPv9PywB9mlVpZ8kN7+Gfezik+CA+vZmXXOippggj4BsVNvGj0CB1/effP6DFtr/nt64BnTbt0sb461lBfgF1ZwTV5x/A5Z6taIm1kCaX0DLb+WlT1gSyZP9k1y1NTImHwWG4etLq2LsNcVEBFUdc4++Abvv/8uJCeYinDoV6y5haP5yuyHUmJedxyio/NIXsOsvLAqys8uZsOf5dxD33PrOQGMZfmnbCYceoWv+c3Wdn76QqEn4uqvf/v+DSnx99/YnmHFpVZO9shgXJ59t2oQ73/6ja/57b2ukmZSgknXjmov/UAPw2vpmRy05UXEZk5DKU09/oCUKsLP/vl9eHSQvyCWpaFS59MQvmNyFtQ0OapISknI2UVWnX/3CTMbQAPv3+VJfqqOssICEqlntijN///+/sqbZVlGYj0/UIqLq5GvsmQcpnt9f6oqzERcQUrH2K6quDDZR4BMQMwwuP/b0N66ch5pIPt6ckO6iICooKCgkJK7glNB09vlPPGUFI3ox9O/9paOnHn/8xcIjZmBhLs6Br4QCCDAAl4YqwVal6MkAAAAASUVORK5CYII=) center center no-repeat}.parldata-widget .visengard-widget-link-block{display:block;width:100%;height:100%;background:#fff;position:absolute;top:0;left:0;z-index:1}.parldata-widget .visengard-widget-link-block p,pre{padding:15px 10px 5px;margin:0;font-size:12px}.parldata-widget .visengard-widget-link-block p:first-of-type{padding-top:30px}.parldata-widget .visengard-widget-link-block pre{background:#fefefe;padding-top:10px}.parldata-widget .visengard-widget-list,.parldata-widget .visengard-widget-organization,.parldata-widget .visengard-widget-person{width:100%;float:left;overflow-x:hidden;overflow-y:auto}.parldata-widget .visengard-widget-list .visegrad-widget-error,.parldata-widget .visengard-widget-organization .visegrad-widget-error,.parldata-widget .visengard-widget-person .visegrad-widget-error{font-size:12px;left:0;padding:0 10%;position:relative;top:50%;transform:translate(0px,-50%)}.parldata-widget .visengard-widget-organization .visengard-widget-organization-top,.parldata-widget .visengard-widget-person .visengard-widget-person-top{padding:25px 4% 0;display:inline-block}.parldata-widget .visengard-widget-list .visengard-widget-list-top{width:100%;display:inline-block}.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-image,.parldata-widget .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-image{float:left;display:block}.parldata-widget .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-image{width:126px;height:126px;border:3px solid #cfcfcf;-moz-border-radius:126px;-webkit-border-radius:126px;border-radius:126px;overflow:hidden}.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-image{width:140px;height:140px;position:relative}.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-image img{max-width:140px;max-height:140px;position:absolute;top:50%;left:50%;-moz-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.parldata-widget .visengard-widget-list .visengard-widget-list-bottom .visengard-widget-list-bottom-members-item-image img,.parldata-widget .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-image img{width:100%}.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic.withLogo,.parldata-widget .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-basic{clear:right;padding-left:150px}.parldata-widget.wider .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic.withLogo,.parldata-widget.wider .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-basic{width:100%;padding-left:0}.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic h4,.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic>div,.parldata-widget .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-basic h4,.parldata-widget .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-basic>div{float:left;width:100%}.parldata-widget .visengard-widget-list .visengard-widget-list-top h4{padding:25px 4% 0;margin:0}.parldata-widget .visengard-widget-list .visengard-widget-list-top h4 a,.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic h4,.parldata-widget .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-basic h4{color:#003e84;margin:0;font-family:'Open Sans',sans-serif;font-size:24px;line-height:1em;font-weight:700}.parldata-widget.wider .visengard-widget-list .visengard-widget-list-top h4 a,.parldata-widget.wider .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic h4,.parldata-widget.wider .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-basic h4{padding-left:2px;padding-right:12px;width:auto}.parldata-widget .visengard-widget-list .visengard-widget-list-top h4 a{width:100%;display:block;text-decoration:none}.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic>div,.parldata-widget .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-basic>div{color:#787878;font-family:'Open Sans',sans-serif;font-size:14px;line-height:1em;font-weight:700;margin-top:8px;margin-bottom:4px;position:relative}.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic .visengard-widget-organization-top-basic-members{width:40%}.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic .visengard-widget-organization-top-basic-members-men,.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic .visengard-widget-organization-top-basic-members-women{width:30%}.parldata-widget.wider .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic .visengard-widget-organization-top-basic-members{width:90%}.parldata-widget.wider .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic .visengard-widget-organization-top-basic-members-men,.parldata-widget.wider .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic .visengard-widget-organization-top-basic-members-women{width:45%}.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic>div>.icon,.parldata-widget .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-basic>div>.icon{height:29px;width:29px;position:absolute;top:50%;left:0;-webkit-transform:translate(0,-50%);-moz-transform:translate(0,-50%);-ms-transform:translate(0,-50%);-o-transform:translate(0,-50%);transform:translate(0,-50%)}.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic .visengard-widget-organization-top-basic-members-men .icon.gender,.parldata-widget .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-basic>div>.icon.gender.male{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZEOUNGMTMzQUI5MTExRTQ4MTY3RDNDNEEzRUZENEVGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZEOUNGMTM0QUI5MTExRTQ4MTY3RDNDNEEzRUZENEVGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkQ5Q0YxMzFBQjkxMTFFNDgxNjdEM0M0QTNFRkQ0RUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkQ5Q0YxMzJBQjkxMTFFNDgxNjdEM0M0QTNFRkQ0RUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7RoGEAAAADiklEQVR42rSXWUwTURSG/25saqtGFGhRCbgkCAiCCm745gMoxjW+6JsbmPggJCZq4MkYjQYMifFBozG+uKCRB4m7ATe0grgjWAWEVoWylVIonjveJhR7ZwaCJ/mSdu7M/8+995yZM5ole69ARUQRG4iVRAIRQZgIJ+EgaoiHxFWiRUlMrzC+kDhCZBO6AOMmThy/qVPETaKQeC0S1QqOhxDFxEsiR2Ao0svh15VwHVWmZuIJkSdzU2rMc7mOWcnUQlTyZR2PWMj1LCLTUOIWMQvjG7O4bmgg02NEEv5PJHF9v+xNIfaMRc2g1yI2yuR3bGDQi/pm58hTmf454pXP9NBYkyZt3nQc35UBrUbjd3xj4W00ObpHbiXzWa/n2bV2rOtW9bYVGXnXpN/rlsWgYGuydAPBhoBVxnzMzHS9mlkadFrkLI9BZpIZ5vAJcPcPor7FieuPG1D9ySEZ5m9JxtHLVhzcliJXStJMM5UMo8MnSksYFqxH+TMbblQ1SnuZHDcNJ/cuR13DLyTGTsPhc8/x7EObnCmL1cx0gdwZpglBKNm3Au++tqPo4gv00Qx9Uf7Uhkt3PuPE7gxUf7TjrrUJocG+NBkSScaz6UbKme7MjkdHlxtHzj/3M/RFY2snDpypwqK54dLMXe4B5BY/ouNdIslIZmqU28c1qTNxvuIjPFQGovjS0ol71mZkpc+W/rM99nqFMzUy007RaMTUMISF6GH97FDMYmv9T8yPnqIm4TuZ6Q/RqE73t/b6PV5FJc+AF0EGVaX+g51VJxp1dPRJyzTHYlJUijObYBPv4/B4y0wfiEZ7+jx4+r4Nm1bFyqpMCgvCmrRoKXtVxH1mep0Qrl/pzTqsTIwSGrMnT9GONNg7XKio/q5kyHzKdJbFm9maJBPzA531m8rF1taFfHq8zbVMRnu3Gy4qHSPNbkVCFAq3L5Z+7y+tRLfLo2R6gzir4Y0Ze4S8kHscxkQYsXttPNLjI6RSYuHs6UdZZSMuUEmxrVAxyzT2ltEM6wZLeIshG2w5Z0wJlTKaLal3aEjtu+E0b4H8ZlbAW0nZcHsG8c3ejdb23tEY1nD9fzqHXiKLsI1z12Djur2ixozl/DKidpwMa7lek1IL2kws5XvgHaOZl1+fzvVUNdsuvumprK6IwVGYlfEszRu+pKP5rLDyzsL3LbNq2LeMkb8s7MQb9qRR+y3zR4ABAETXGd8corMlAAAAAElFTkSuQmCC)}.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic .visengard-widget-organization-top-basic-members-women .icon.gender,.parldata-widget .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-basic>div>.icon.gender.female{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFBMUE5QTRGQUI5MjExRTRCMENEQUM5Mzg5NkQ5QTIzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFBMUE5QTUwQUI5MjExRTRCMENEQUM5Mzg5NkQ5QTIzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUExQTlBNERBQjkyMTFFNEIwQ0RBQzkzODk2RDlBMjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUExQTlBNEVBQjkyMTFFNEIwQ0RBQzkzODk2RDlBMjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6xWcp0AAADyUlEQVR42rSXW0xURxjH/wsLewEXhEVKWXSDilZFUbQUSQEvIY0KkeKDibfYBE0rtCY2bfpgSNM0NT5BKU0DbWrSh76oXGJaiomARkxq5LYgIileuoALeGHBdWHd036zma1Qdpyj4pf8djc7c/7/M2e++WaOJu3IaaiIN4kCIpNIJt4gIogxYoToIJqJM8SgTEwraU8hSohcIjhAewRnCb+pUqKO+JJoF4kGCf7XE98S14idAkOR3k5+XTnXUWUaT1whip9zU2rMi7hOvMzUQlzmj3UuIoXrWUSmBuIcsQhzG4u4riFQIp0k1sgUQoI0yEu3YmuqBUkJ86HXaeF44MLVnnv4tbEPt4cfB7psDddnUwYNXzLriKuyOVxoNuKbwo2wxpnQYhuCrX8Ubo8XlugwZK61ICbSgFO/daOqvjfQ5QqxgWj1j/S4zNA8LxQVR7Mx7prC/q8b8JdjYkZ7eW0XDuYswwfbV8HjVXDqfF+g/GE++VqeXXmyx3ps11rf98flFzE6PjWr3aP8g8r6G77fhbnJaOl24Oag8//dmE88c89X81iz11nwY11XQMPp8VNDr2+Od727WLSU8tlHtmyUaW/Fwqso+KN9QJqqXhpxU5sdG1bEirpsYqarZEKxkUY4HrrgnvKqWiP2kQlfUgliJTONk4lMep4iXKdVvTCN1Nc9+VTUHMdMTTKRnruPEDFPD+uCMFWmyYlm9M9OIn+YmKlTJvJn7wjuj7lxIGe5vPzEhCFjdRwutNtFXZzMdEjUum/zUsRHGTBF666y1ob30qwoyLAKDaNoLZ84tBF/D0+g+vItUbchZtolat1G5e57KggJ0UZER+qh0QCf7k5Fyd71SFwQ/qxo64KQ+/ZC/PzZFpiMofiiqoXyQBHJdrMyWMT3vlkRY9Kh4pMsRIaFwhSuQ2WdDfcfuVGYlwwz3cTYuJvKoIIokx7a4CDfUik92wEH9XlOFLOUrCbKAhWIEeckLnUMYA/NpZPKX0OrHfZRF36/RutwqRnLrfNhCNFiiIrBFSr4gw+eyKacDb/GX/Cr+Y4/Iw7mJOEwjeqX+h5kUUHXhQTjo9ImDMjFRVHjr0gsvuJ3MSPez1yCH2o7UXHuOj4sa4bL7UF2iuVlDRXu89/WBj6vRXh98Z1/P50+j5/zo+TriA6uP+u44iJ2EHfm2PAO13WJDmasjGQQnXNk2Mn17LIjKNu/3uFzoLxC0rDr07meqsP2Ez7p63mae1/ArIafhYqnP9IXea1o4ycL/7tM1rR3GRPfLIYJG9Go9l3mXwEGAAawIDOMLm4dAAAAAElFTkSuQmCC)}.parldata-widget .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-basic>div>.icon.gender.other{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY1OEFDQ0JEQUJCNTExRTRCMTUwRjcwRUNERkRFRTFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY1OEFDQ0JFQUJCNTExRTRCMTUwRjcwRUNERkRFRTFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjU4QUNDQkJBQkI1MTFFNEIxNTBGNzBFQ0RGREVFMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjU4QUNDQkNBQkI1MTFFNEIxNTBGNzBFQ0RGREVFMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5AzTMnAAABkUlEQVR42ryXPUvDUBSG48dgl3a1ptDFTaVFFBXBj12lxX9RdXYqIm5OotJfoSjirg7SyY9W/QGFaEEnO8TJ4HvgTWmxMalNzoGnlIb7Prnl5ubcvpmNEyNAjYB1sAAmwDBIgE/wASrgBpyCN7+wQZ/rWbADVsFAh+sJMsqbOgAXYBc8eoX2e/w+BA7BHch5CL3ychx3xJxAUhOUwdYfNxVEvskc00+aArf8W8OoLPNSXtIYuARpI9xKMzfWSboPMkY0lWF+m3QSFIxoq0BPU1rsYdF0s7iK7hdZXWuGTonHFGleYZats83Lx5KhW8siHVeWjok0qSxNijSuLI2LtKEsbYi0riyti/RZWfoi0mtl6ZVIz4CjJBTPuUhf2WJolHgsd/vbU5itQ09zz70HpYilJXraNvpttpJRVIX5vzoHG6yAWsjCGnNtr8bMAvOgGpKwyjzLrwWV1TwLjntYXA7HzzEvULP9xb53Sp4r8N3NcwimOd7+z7HigZ2Fe5ZZbDnLxPmyeAdPstMEPcv8CDAA5E5M1iMrh8kAAAAASUVORK5CYII=)}.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic>div>.icon.members{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAIAAADZ8fBYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZFQTJBNjc3QUJCNjExRTQ5MkMxQkNBNjRCQ0Y0NTlFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZFQTJBNjc4QUJCNjExRTQ5MkMxQkNBNjRCQ0Y0NTlFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkVBMkE2NzVBQkI2MTFFNDkyQzFCQ0E2NEJDRjQ1OUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkVBMkE2NzZBQkI2MTFFNDkyQzFCQ0E2NEJDRjQ1OUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6qm2uMAAADt0lEQVR42mL8//8/Aw0AEwNtwKi5EMBCjKLjl5/P2nLlxrNP8qLc8W4anhYKBLUwEkwPRy8/L5l1HKiMkZEBorY8zCDQTpm0cHjw/BMQIYtMXX8JaGiOr/bhCYENsSZAkRlbrvz6/Reu4P6zj49efsYZDn///a+be+Lu849AtrIkf3OyBRMT48t33+69+iLGzx7tps7IyOhhLr/+0N2LD9/fePReT1nkz99/tXNOPHz9+d/f/9ryQtVxpkAt6O7dderRnz//ltW4A9GPn392nnoEFPz95x+Q5GJnARoKUcbFwQok//wBuXfbsQdAoxdXuS2udnv76ceB80+whMOV+2+cjWSAFgKRq6nclftvgYISwlz8XCwPX3+9dPcNkPv0zZfz998C7VCW4gdyr95/62Yix8zEyMrC5GAgffn+OyzhIMrP+eT1Fwj72esvYgIcIGlmpmhHtWlbr+VPO2yhJn7x3psfv/4GWyvw84Jk+XnZn7/9CtHy9N1XAW5WLOa6m8tn9B/g5WJjYPi/8cSDGYUOEPEYd413X3+uPHh3/+XnQK6boXResAFEys9GKaNvPyc7y++//3acejSvzBl7Orv//NO6Q3eAjGA7FQVJPuT4ffn+2+OXnyWEuGXEeJDFgYlhzcG7wKAIc1RFlkJPv1++/Xrz8Qc/D5sg2KdA8PrD92v337399P3r9988nKxC/JyqMgJSItwQ2bcff3z+9ktUgJObkxVLOgMavnrfrW2nH716/01MkCvUTsXbSuHQhaezt169/fwzZrJXkeBN99Wx1Zc6eOHJ5mP3n3/4Li3E5WWuEGSvAkk4UPcu2n791M2XeUH6qrICkCR15NKz0tnAbMYATLxGKqLigpx8XGyfvv168e77+buvX338CfR7d5qFlY4UxFl3nnyYuPaCna5UmLMaxKUgEFizFRiz/5FAbOsu8+w1a/bd+vfv339UABRZuecmUDahbRey+KOXn8IbtkPY0PT7689fbnZE2gCm9tvPPwFFghxU4TkCESeMjKFOqmzMTDeeoQQRFzvrr7//UPIFPxfb5++/EaHOzMTKxPT15x+gf7AWK8BMDzSCnRWleAGGkiA3G0q8AcNu5qYr/DBRL3N5Xm7Wt59+fvn2mxcmiAyAaQDsGtYr997uOv0Injb4uFDNzQ7Ue/ACUYwJ8nEIcrEBzXUt34ynMAT6UoifQ01WAMqXZVCEpXqouTpKwkCErMdUQ/zOi8/4Sm5GBnMtcSlhbikrRXLK9dH6eCSZCxBgAOhlxLref4yXAAAAAElFTkSuQmCC)}.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic>div>.icon.contact{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAIAAADZ8fBYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg3QjYxNUI2QUJCNjExRTRCNjhERDYyRTQxMTY4MUE0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg3QjYxNUI3QUJCNjExRTRCNjhERDYyRTQxMTY4MUE0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODdCNjE1QjRBQkI2MTFFNEI2OERENjJFNDExNjgxQTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODdCNjE1QjVBQkI2MTFFNEI2OERENjJFNDExNjgxQTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7gCtcfAAAEGElEQVR42mL8//8/Aw0AEwNtAAt+6Qu3Xx269PzsrVevP3x/9/U3JzuTsjifsZqom6m8sjQ/Ho2MuMLh8r0309ZfPn//HUIpI0IxIyODq4F0hr+ulAg3CeYu2Xlj6pZrQClZYa5AGyVzLQkpUW5ONpZP3349fvn50MWnG47d//jtDz8XS3OCuZmWBFHmzttyddaOG8xMjGmeGtFuGizMWOLg05efk9Ze2nL6EVBZd5qFlY4UAXNPXn1eMOMYEyNje5K5nYE0/tCfueny/F23uDmYF1e4ogUISrz9+ftv0rpLQIuyfLXghn7/9Wf78Qcnr7388OWnuBCXg4G0o5EMMKyBUmm+uk9ff911/unktRfb061wmrvvzOO7L78oiHGHO6tBRJ68+lIy/ciD11+hKh6+B5pidvRee6oVNycr0PD8EINDV1/sv/z84YtP8hJ82NPvvvNPgGSwjRIkTH/9/ls+8yjQUDUpvu5UywVlTpXhBsJ87KduvWlbcgaiRZifw91IBsjYf+4Jznxx6f5bIGkJi4Rdpx9BnD+r2NFWX0pDTtDfVnl+mTMwQPdefHbz8XuIMjMNcSB55cE7nOYCUz6QlBblhmWKN0Ay3EGVgx0RXGICnM76IAdeufMGIiIjzgMkX77/hi8fA9MNPIH8+vMXSHKwoedJYMgCyR+//8KSFIj8i5quUMyVEuT8++//rUdQD6qCc+qes4+RtQAD/dClp0CGCiwfX38ICgFlCX6c5trpgUJ2/ZF7EK6XpSI3O8vR6y/7Vp378u0XUOTpmy+VM489ffddVZLXRBOUzYBWbjp2H8iw1pXEmS8evfwc3rKblYlxYYWzoiQo0Ry++Kx63slff/8BBTnZmT99/wMUFOJlm5pnD1Gw+8zj2gWngIlkXYMnOxszdvfKifMGmMsBTelZce7fP5B9wGQwu8TBUVcSmBGAhgILhAArhYXlLhBDP3/9NWHdRVAG8dRENhRLPgZmqpjWXW8+/0r31Ej01oaLA5V9+/EHEmMwEYaa2cf3XnpmqCg0tdCBiYkRX3oQ4GGviTYFZiRg0XPsyjPkQhLZUCBYuP0a0FCgD2rjzdAMxV5fWOhIZHlrAZ1TPf8kJK4xwd4zj2duvw5MlE3xZliLYOz1UIy7prep7Pef/0pnHH3w/BOa7PHLzxsXnwFanOOnba4tSUL9BgyHyhgTa01xYEDnTz0MLFPgUieuvCifcwIYtwmuapEu6iTXm8Cipy3V0kRF+OWHHxkTDkBKg31nH5fNPg40NMxOKd1Pl5z6DQJ+/vpbOevYsRuveDiZA62Vluy9A1Qf46iSHaTPyMhAvrmQjNu6+MxOcDEINCvTSyvOU5NwRf+fCPDv378ZGy+5lmzYfuLBf+IA4xBr79DKXIAAAwAPQBXUfNziQgAAAABJRU5ErkJggg==)}.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic>div>p,.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic>div>small,.parldata-widget .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-basic>div>p,.parldata-widget .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-basic>div>small{width:100%;float:left;margin:0;padding:0 0 0 42px;line-height:1em}.parldata-widget.wide .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic>div>p,.parldata-widget.wide .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic>div>small,.parldata-widget.wide .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-basic>div>p,.parldata-widget.wide .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-basic>div>small{padding-left:34px}.parldata-widget.wide .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic>div>small,.parldata-widget.wide .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-basic>div>small{width:auto}.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic>div>small,.parldata-widget .visengard-widget-person .visengard-widget-person-top .visengard-widget-person-top-basic>div>small{color:#9f9f9f;font-size:11px;margin-bottom:2px}.parldata-widget.wider .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic .visengard-widget-organization-top-basic-contact{width:auto;max-width:95%}.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic .visengard-widget-organization-top-basic-contact .icon{top:0;-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic .visengard-widget-organization-top-basic-contact p{padding-bottom:6px;width:auto}.parldata-widget .visengard-widget-list .visengard-widget-list-bottom .visengard-widget-list-bottom-members .visengard-widget-list-bottom-members-item a,.parldata-widget .visengard-widget-organization .visengard-widget-organization-top .visengard-widget-organization-top-basic .visengard-widget-organization-top-basic-contact p a{color:#4c6ba8;text-decoration:none;outline:0}.parldata-widget .visengard-widget-list .visengard-widget-list-bottom,.parldata-widget .visengard-widget-organization .visengard-widget-organization-bottom,.parldata-widget .visengard-widget-person .visengard-widget-person-bottom{padding:0 4% 5px;display:inline-block}.parldata-widget .visengard-widget-list .visengard-widget-list-bottom .visengard-widget-list-bottom-separate-line,.parldata-widget .visengard-widget-organization .visengard-widget-organization-bottom .visengard-widget-organization-bottom-separate-line,.parldata-widget .visengard-widget-person .visengard-widget-person-bottom .visengard-widget-person-bottom-separate-line{border-top:3px solid #376bac;width:46px;clear:both;margin:18px 0}.parldata-widget .visengard-widget-person .visengard-widget-person-bottom .visengard-widget-person-bottom-bio-one-line{color:#111;font-family:'Open Sans',sans-serif;font-size:12px;line-height:1em;font-weight:400}.parldata-widget .visengard-widget-organization .visengard-widget-organization-bottom a,.parldata-widget .visengard-widget-person .visengard-widget-person-bottom a,.parldata-widget .visengard-widget-person .visengard-widget-person-bottom>ul{color:#4c6ba8;font-family:'Open Sans',sans-serif;font-size:12px;line-height:1em;font-weight:700;float:left;width:100%;outline:0}.parldata-widget .visengard-widget-organization .visengard-widget-organization-bottom a,.parldata-widget .visengard-widget-person .visengard-widget-person-bottom a{text-decoration:none;outline:0}.parldata-widget .visengard-widget-person .visengard-widget-person-bottom>ul{margin:6px 0;padding:0;list-style:none}.parldata-widget .visengard-widget-person .visengard-widget-person-bottom>ul>li>a{margin:0 0 6px;outline:0}.parldata-widget .visengard-widget-person .visengard-widget-person-bottom .visengard-widget-person-bottom-members.arrowDown:after{content:''}.parldata-widget .visengard-widget-person .visengard-widget-person-bottom .visengard-widget-person-bottom-members-list{display:none}.parldata-widget .visengard-widget-person .visengard-widget-person-bottom .visengard-widget-person-bottom-members-list>li>a{font-weight:400;outline:0}.parldata-widget .visengard-widget-list .visengard-widget-list-bottom .visengard-widget-list-bottom-members .visengard-widget-list-bottom-members-item a,.parldata-widget .visengard-widget-list .visengard-widget-list-top h4 a{text-align:center;outline:0;line-height:1em}.parldata-widget .visengard-widget-list .visengard-widget-list-bottom .visengard-widget-list-bottom-members .visengard-widget-list-bottom-members-item a{font-size:16px}.parldata-widget .visengard-widget-list .visengard-widget-list-bottom .visengard-widget-list-bottom-members{list-style:none;margin:0;padding:0}.parldata-widget .visengard-widget-list .visengard-widget-list-bottom .visengard-widget-list-bottom-members .visengard-widget-list-bottom-members-item{float:left;width:33%;height:180px;text-align:center;margin-bottom:20px}.parldata-widget .visengard-widget-list .visengard-widget-list-bottom .visengard-widget-list-bottom-members .visengard-widget-list-bottom-members-item .visengard-widget-list-bottom-members-item-image{width:105px;height:105px;border:3px solid #cfcfcf;-moz-border-radius:126px;-webkit-border-radius:126px;border-radius:126px;overflow:hidden;margin:0 auto}.parldata-widget.wide .visengard-widget-list .visengard-widget-list-bottom .visengard-widget-list-bottom-members .visengard-widget-list-bottom-members-item{width:50%}.parldata-widget.wider .visengard-widget-list .visengard-widget-list-bottom .visengard-widget-list-bottom-members .visengard-widget-list-bottom-members-item{width:95%}");
    var cssList = document.getElementsByTagName('link')[0];
    css.appendChild(cssText);
    cssList.parentNode.insertBefore(css, cssList);

    /******* Core Object *******/
    var jQuery;
    visegrad = {
        'storage': false,
        'json_url': 'http://api.parldata.eu',
        'cache': {},
        'data': {},
        'lang': {
            'en': {
                'born': 'born',
                'nationality': 'nationality',
                'politicalparty': 'political party',
                'politicalpartyclassification': 'caucus',
                'comittesList': 'Membership in comittes and other bodies',
                'membersCount': 'members count',
                'membersMen': 'men',
                'membersWomen': 'women',
                'contactDetail': 'contact address',
                'membersList': 'List of members',
                'linkGenerator': 'Copy below code to generate widget at selected view',
                'errorMsg': 'Request didn\'t found any data with this ID. Please make sure that ID is correct.',
                'emptyMsg': 'Request didn\'t found any data or they are empty.'
            }
        },
        reload: function () {
            return main();
        }
    };

    /******** Load jQuery if not present *********/
    if (window.jQuery === undefined) {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src",
            "http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js");
        if (script_tag.readyState) {
            script_tag.onreadystatechange = function () { // For old versions of IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    scriptLoadHandler();
                }
            };
        } else {
            script_tag.onload = scriptLoadHandler;
        }
        // Try to find the head, otherwise default to the documentElement
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    } else {
        // The jQuery version on the window is the one we want to use
        jQuery = window.jQuery;
        main();
    }

    /******** Called once jQuery has loaded ******/
    function scriptLoadHandler() {
        // Restore $ and window.jQuery to their previous values and store the
        // new jQuery in our local jQuery variable
        jQuery = window.jQuery.noConflict(true);
        // Call our main function
        main();
    }


    function resize() {
        setTimeout(function () {
            $('.parldata-widget').each(function () {
                var el = $(this),
                    wrapper = el.find('.visengard-widget-wrapper'),
                    elWidth = el.width();

                if (elWidth <= 300)
                    el.addClass('wider');
                if (elWidth <= 400)
                    el.addClass('wide');
                wrapper.css('width', elWidth * 3 + 'px').find('>div').css('width', elWidth + 'px');
            });
        }, 0);
    }

    function generatePersonTemplate(el, data) {
        var lang = el.attr('data-language') || 'en';

        var personalBlock = $('<div></div>').addClass('visengard-widget-person').css('width', el.width()).append(
            $('<div></div>').addClass('visengard-widget-person-top').append(
                $('<div></div>').addClass('visengard-widget-person-top-image').append(
                    $('<img />').attr({
                        src: data.image || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAIAAAAFYYeqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAvtpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkJDMkNGODVBQkI3MTFFNDg1MjZENkU2NDdFQjMyQUEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkJDMkNGODRBQkI3MTFFNDg1MjZENkU2NDdFQjMyQUEiIHhtcDpDcmVhdG9yVG9vbD0iUGljYXNhIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9IkFCREI5QUYyQzA4MERGNEQ0NjY1MzNGNUEyQTUzMTZEIiBzdFJlZjpkb2N1bWVudElEPSJBQkRCOUFGMkMwODBERjRENDY2NTMzRjVBMkE1MzE2RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrGTi3sAABKISURBVHja7F1pextHji5UVR+8SVGUKCmynTiTTTLH//8B83G+77PZTeKJb1kSRUok+6hj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",
                        title: data.name
                    })
                )
            ).append(
                $('<div></div>').addClass('visengard-widget-person-top-basic').append(
                    $('<h4></h4>').text(data.name)
                )
            )
        ).append(
            $('<div></div>').addClass('visengard-widget-person-bottom').append(
                $('<div></div>').addClass('visengard-widget-person-bottom-separate-line')
            )
        );

        if (el.attr('data-link')) {
            if (el.find('.visengard-widget-link'))
                el.find('.visengard-widget-link').remove();
            el.append(
                $('<a></a>').addClass('visengard-widget-link').attr({
                    'href': '#person-' + data.id
                }).click(function (e) {
                    var btn = $(this);

                    e.preventDefault();
                    if (btn.hasClass('show')) {
                        btn.removeClass('show');
                        el.find('.visengard-widget-link-block').remove();
                    } else {
                        $('<div></div>').addClass('visengard-widget-link-block').append(
                            $('<p></p>').text(visegrad.lang[lang].linkGenerator)
                        ).append(
                            $('<p></p>').html('<strong>HEAD</strong>')
                        ).append(`
                            $('<pre></pre>').text('<script type="text/javascript" src="https://epforgpl.github.io/ParlData-Widgets/js/widget-visegrad.js"></script>')
                                .click(function () {
                                    $(this).select();
                                })
                        ).append(
                            $('<p></p>').html('<strong>BODY</strong>')
                        ).append(
                            $('<pre></pre>').text('<div class="parldata-widget" data-country="' + el.attr('data-country') + '" data-parliament="' + el.attr('data-parliament') + '" data-context="personal" data-id="' + data.id + '"></div>')
                                .click(function () {
                                    $(this).select();
                                })
                        ).appendTo(el);
                        btn.addClass('show');
                    }
                })
            );
        }
        if (data.birth_date)
            personalBlock.find('.visengard-widget-person-top-basic').append(
                $('<div></div>').addClass('visengard-widget-person-top-basic-birthday').append(
                    $('<span></span>').addClass('icon gender ' + (typeof(data.gender) !== 'undefined') ? data.gender : '')
                ).append(
                    $('<small></small>').text(visegrad.lang[lang].born)
                ).append(
                    $('<p></p>').text(data.birth_date)
                )
            );
        if (data.national_identity)
            personalBlock.find('.visengard-widget-person-top-basic').append(
                $('<div></div>').addClass('visengard-widget-person-top-basic-nationality').append(
                    $('<span></span>').addClass('icon national ' + data.national_identity)
                ).append(
                    $('<small></small>').text(visegrad.lang[lang].nationality)
                ).append(
                    $('<p></p>').text(data.national_identity)
                )
            );
        if (data.memberships)
            $.grep(data.memberships, function (item) {
                if (typeof(item.end_date) == "undefined" && item.organization.classification == visegrad.lang[lang].politicalpartyclassification) {
                    personalBlock.find('.visengard-widget-person-top-basic').append(
                        $('<div></div>').addClass('visengard-widget-person-top-basic-politicalparty').append(
                            $('<span></span>').addClass('icon').append(function () {
                                if (item.organization.image)
                                    $('<img />').attr({
                                        'src': item.organization.image,
                                        'title': 'item.organization.name'
                                    }).appendTo($(this));
                            })
                        ).append(
                            $('<small></small>').text(visegrad.lang[lang].politicalparty)
                        ).append(
                            $('<p></p>').text(item.organization.name)
                        )
                    );
                }
            });
        if (data.summary)
            personalBlock.find('.visengard-widget-person-bottom').append(
                $('<div></div>').addClass('visengard-widget-person-bottom-bio-one-line').text(data.summary)
            );
        if (data.memberships && (data.memberships.length > 1))
            personalBlock.find('.visengard-widget-person-bottom').append(
                $('<a></a>').addClass('visengard-widget-person-bottom-members arrowDown').attr('href', '#visengard-widget-person-bottom-members').text(visegrad.lang[lang].comittesList).click(function (e) {
                    var that = $(this);

                    e.preventDefault();
                    if (that.hasClass('arrowDown')) {
                        that.removeClass('arrowDown').addClass('arrowUp');
                        that.parent().find('.visengard-widget-person-bottom-members-list').slideDown();
                    } else {
                        that.removeClass('arrowUp').addClass('arrowDown');
                        that.parent().find('.visengard-widget-person-bottom-members-list').slideUp();
                    }
                })
            ).append(
                $('<ul></ul>').addClass('visengard-widget-person-bottom-members-list').append(function () {
                    var list = $(this);
                    $.each(data.memberships, function (key, value) {
                        var label = value.organization.name; 
                        if (value.label) {
                            label = label + ' as ' + value.label;
                        }
                        
                        $('<li></li>').append(
                            $('<a></a>').attr({
                                'href': value.organization.id,
                                'target': '_blank'
                            }).text(label).click(function (e) {
                                e.preventDefault();
                                if (el.attr('data-back') == null)
                                    el.attr('data-back', el.attr('data-id'));
                                backButton(el, 'person');
                                el.attr('data-id', value.organization.id);
                                jsonDataOrganization(el)
                            })
                        ).appendTo(list);
                    })
                })
            );
        if (data.sources)
            personalBlock.find('.visengard-widget-person-bottom').append(
                $('<ul></ul>').addClass('visengard-widget-person-bottom-links-list').append(function () {
                    var list = $(this);
                    $.each(data.sources, function (key, value) {
                        $('<li></li>').append(
                            $('<a></a>').attr({'href': value.url, 'target': '_blank'}).text(value.note)
                        ).appendTo(list);
                    })
                })
            );

        el.find('.visengard-widget-person').replaceWith(personalBlock);
        el.find('.visengard-widget-wrapper > div').css('height', el.height());
        el.find('.visengard-widget-wrapper').animate({
            'margin-left': 0
        });
        personalBlock.css('height', 'auto');
    }

    function generateOrganizationTemplate(el, data) {
        var lang = el.attr('data-language') || 'en';
        var organizationBlock = $('<div></div>').addClass('visengard-widget-organization').css('width', el.width()).append(
            $('<div></div>').addClass('visengard-widget-organization-top').append(
                $('<div></div>').addClass('visengard-widget-organization-top-basic').append(
                    $('<h4></h4>').text(data.name)
                )
            )
        ).append(
            $('<div></div>').addClass('visengard-widget-organization-bottom')
        );

        if (el.attr('data-link')) {
            if (el.find('.visengard-widget-link'))
                el.find('.visengard-widget-link').remove();
            el.append(
                $('<a></a>').addClass('visengard-widget-link').attr({
                    'href': '#organization-' + data.id
                }).click(function (e) {
                    var btn = $(this);

                    e.preventDefault();
                    if (btn.hasClass('show')) {
                        btn.removeClass('show');
                        el.find('.visengard-widget-link-block').remove();
                    } else {
                        $('<div></div>').addClass('visengard-widget-link-block').append(
                            $('<p></p>').text(visegrad.lang[lang].linkGenerator)
                        ).append(
                            $('<p></p>').html('<strong>HEAD</strong>')
                        ).append(
                            $('<pre></pre>').text('<script type="text/javascript" src="http://parldata.eu/widget-person-organization.js"></script>')
                                .click(function () {
                                    $(this).select();
                                })
                        ).append(
                            $('<p></p>').html('<strong>BODY</strong>')
                        ).append(
                            $('<pre></pre>').text('<div class="parldata-widget" data-country="' + el.attr('data-country') + '" data-parliament="' + el.attr('data-parliament') + '" data-context="organization" data-id="' + data.id + '"></div>')
                                .click(function () {
                                    $(this).select();
                                })
                        ).appendTo(el);
                        btn.addClass('show');
                    }
                })
            );
        }
        if (data.image) {
            organizationBlock.find('.visengard-widget-organization-top .visengard-widget-organization-top-basic').addClass('withLogo');
            organizationBlock.find('.visengard-widget-organization-top').prepend(
                $('<div></div>').addClass('visengard-widget-organization-top-image').append(
                    $('<img />').attr({
                        src: data.image,
                        title: data.name
                    })
                )
            );
        }
        if (data.memberships) {
            organizationBlock.find('.visengard-widget-organization-bottom').append(
                $('<div></div>').addClass('visengard-widget-organization-bottom-separate-line')
            ).append(
                $('<a></a>').attr('href', '#' + data.id).addClass('visengard-widget-organization-bottom-members arrowDown').text(visegrad.lang[lang].membersList).click(function (e) {
                    e.preventDefault();
                    if (el.attr('data-back') == null)
                        el.attr('data-back', el.attr('data-id'));
                    backButton(el, 'organization');
                    jsonDataOrganizationMembers(el);
                })
            );
            organizationBlock.find('.visengard-widget-organization-top-basic').append(
                $('<div></div>').addClass('visengard-widget-organization-top-basic-members').append(
                    $('<span></span>').addClass('icon members')
                ).append(
                    $('<small></small>').text(visegrad.lang[lang].membersCount)
                ).append(
                    $('<p></p>').text(data.memberships.length)
                )
            );
            if (data.membershipsCount) {
                if (data.membershipsCount.men) {
                    organizationBlock.find('.visengard-widget-organization-top-basic').append(
                        $('<div></div>').addClass('visengard-widget-organization-top-basic-members-men').append(
                            $('<span></span>').addClass('icon gender men')
                        ).append(
                            $('<small></small>').text(visegrad.lang[lang].membersMen)
                        ).append(
                            $('<p></p>').text(data.membershipsCount.men)
                        )
                    );
                }

                if (data.membershipsCount.women) {
                    organizationBlock.find('.visengard-widget-organization-top-basic').append(
                        $('<div></div>').addClass('visengard-widget-organization-top-basic-members-women').append(
                            $('<span></span>').addClass('icon gender female')
                        ).append(
                            $('<small></small>').text(visegrad.lang[lang].membersWomen)
                        ).append(
                            $('<p></p>').text(data.membershipsCount.women)
                        )
                    );
                }
            }
        }

        if (data.contact_details) {
            organizationBlock.find('.visengard-widget-organization-top-basic').append(
                $('<div></div>').addClass('visengard-widget-organization-top-basic-contact').append(
                    $('<span></span>').addClass('icon contact')
                ).append(
                    $('<small></small>').text(visegrad.lang[lang].contactDetail)
                ).append(function () {
                        var that = $(this);

                        $.each(data.contact_details, function (key, item) {
                            $('<p></p>').html(function () {
                                var text = '';

                                if (item.type == 'url') {
                                    text += '<a href="' + item.value + ' target="_blank">' + item.value + '</a>';
                                } else {
                                    if (item.label)
                                        text += item.label + ': ';
                                    text += item.value;
                                }
                                return text;
                            }).appendTo(that);
                        });
                    })
            );
        }
        el.find('.visengard-widget-organization').replaceWith(organizationBlock);
        el.find('.visengard-widget-wrapper > div').css('height', el.height());
        el.find('.visengard-widget-wrapper').animate({
            'margin-left': -(el.width()) + 'px'
        });
        organizationBlock.css('height', 'auto');
    }

    function generateListTemplate(el, data) {
        var lang = el.attr('data-language') || 'en';

        if (data.memberships) {
        var listBlock = $('<div></div>').addClass('visengard-widget-list').css('width', el.width()).append(
            $('<div></div>').addClass('visengard-widget-list-top').append(
                $('<h4></h4>').append(
                    $('<a></a>').attr('href', '#' + data.id).text(data.name).click(function (e) {
                        e.preventDefault();
                        if (el.attr('data-back') == null)
                            el.attr('data-back', el.attr('data-id'));
                        backButton(el, 'organization_members');
                        el.attr('data-id', data.id);
                        jsonDataOrganization(el)
                    })
                )
            )
        ).append(
            $('<div></div>').addClass('visengard-widget-list-bottom').append(
                $('<div></div>').addClass('visengard-widget-list-bottom-separate-line')
            ).append(
                $('<ul></ul>').addClass('visengard-widget-list-bottom-members').append(function () {
                    var listMembers = $(this);

                    $.each(data.memberships, function (key, item) {
                        $('<li></li>').addClass('visengard-widget-list-bottom-members-item').append(
                            $('<a></a>').attr('href', item.person.id).text(item.person.name).click(function (e) {
                                e.preventDefault();

                                if (el.attr('data-back') == null)
                                    el.attr('data-back', el.attr('data-id'));
                                backButton(el, 'organization_members');
                                el.attr('data-id', $(this).attr('href'));
                                jsonDataPerson(el);
                            }).prepend(
                                $('<div></div>').addClass('visengard-widget-list-bottom-members-item-image').append(
                                    $('<img />').attr({
                                        src: item.person.image || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAIAAAAFYYeqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAvtpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkJDMkNGODVBQkI3MTFFNDg1MjZENkU2NDdFQjMyQUEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkJDMkNGODRBQkI3MTFFNDg1MjZENkU2NDdFQjMyQUEiIHhtcDpDcmVhdG9yVG9vbD0iUGljYXNhIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9IkFCREI5QUYyQzA4MERGNEQ0NjY1MzNGNUEyQTUzMTZEIiBzdFJlZjpkb2N1bWVudElEPSJBQkRCOUFGMkMwODBERjRENDY2NTMzRjVBMkE1MzE2RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrGTi3sAABKISURBVHja7F1pextHji5UVR+8SVGUKCmynTiTTTLH//8B83G+77PZTeKJb1kSRUok+6hj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",
                                        title: item.person.name
                                    })
                                )
                            )
                        ).appendTo(listMembers)
                    })
                })
            )
        );

        if (el.attr('data-link')) {
            if (el.find('.visengard-widget-link'))
                el.find('.visengard-widget-link').remove();
            el.append(
                $('<a></a>').addClass('visengard-widget-link').attr({
                    'href': '#organization-' + data.id
                }).click(function (e) {
                    var btn = $(this);

                    e.preventDefault();
                    if (btn.hasClass('show')) {
                        btn.removeClass('show');
                        el.find('.visengard-widget-link-block').remove();
                    } else {
                        $('<div></div>').addClass('visengard-widget-link-block').append(
                            $('<p></p>').text(visegrad.lang[lang].linkGenerator)
                        ).append(
                            $('<p></p>').html('<strong>HEAD</strong>')
                        ).append(
                            $('<pre></pre>').text('<script type="text/javascript" src="http://parldata.eu/widget-person-organization.js"></script>')
                                .click(function () {
                                    $(this).select();
                                })
                        ).append(
                            $('<p></p>').html('<strong>BODY</strong>')
                        ).append(
                            $('<pre></pre>').text('<div class="parldata-widget" data-country="' + el.attr('data-country') + '" data-parliament="' + el.attr('data-parliament') + '" data-context="organization_members" data-id="' + data.id + '"></div>')
                                .click(function () {
                                    $(this).select();
                                })
                        ).appendTo(el);
                        btn.addClass('show');
                    }
                })
            );
        }
        el.find('.visengard-widget-list').replaceWith(listBlock);
        el.find('.visengard-widget-wrapper > div').css('height', el.height());
        el.find('.visengard-widget-wrapper').animate({
            'margin-left': -(el.width() * 2) + 'px'
        });
        listBlock.css('height', 'auto');
        } else {
            jsonDataOrganization(el)
        }
    }

    function jsonDataPerson(el) {
        var json_url = el.attr('data-api-endpoint') || visegrad.json_url,
            country = el.attr('data-country') + '/' + el.attr('data-parliament'),
            id = el.attr('data-id');

        if (id) {
            if (typeof(visegrad.data[country]) !== "undefined" && typeof(visegrad.data[country].person[id]) !== "undefined" && visegrad.data[country].person[id] !== null) {
                generatePersonTemplate(el, visegrad.data[country].person[id])
            } else {
                if (typeof(visegrad.cache[country]) !== "undefined" && typeof(visegrad.cache[country].person[id]) !== "undefined" && visegrad.cache[country].person[id] != null)
                    generatePersonTemplate(el, visegrad.cache[country].person[id]);

                $.ajax({
                    url: json_url + '/' + country + '/people/' + id + '?embed=["memberships.organization"]',
                    dataType: 'json',
                    success: function (data) {
                        if (typeof(visegrad.data[country]) == "undefined")
                            visegrad.data[country] = {
                                person: {},
                                organization: {}
                            };
                        visegrad.data[country].person[id] = data;
                        localStorage.setItem('visegradWidgetData', JSON.stringify(visegrad.data));
                        generatePersonTemplate(el, data);
                    },
                    error: function () {
                        generateErrorLog(el, 'visengard-widget-person');
                    }
                });
            }
        } else {
            generateErrorLog(el, 'visengard-widget-person');
        }
    }

    function jsonDataOrganization(el) {
        var json_url = el.attr('data-api-endpoint') || visegrad.json_url,
            country = el.attr('data-country') + '/' + el.attr('data-parliament'),
            id = el.attr('data-id');

        if (id) {
            if (typeof(visegrad.data[country]) !== "undefined" && typeof(visegrad.data[country].organization[id]) !== "undefined" && visegrad.data[country].organization[id] !== null) {
                generateOrganizationTemplate(el, visegrad.data[country].organization[id]);
            } else {
                if (typeof(visegrad.cache[country]) !== "undefined" && typeof(visegrad.cache[country].organization[id]) !== "undefined" && visegrad.cache[country].organization[id] != null)
                    generateOrganizationTemplate(el, visegrad.cache[country].organization[id]);

                $.ajax({
                    url: json_url + '/' + country + '/organizations/' + id + '?embed=["memberships.person"]',
                    dataType: 'json',
                    success: function (data) {
                        if (typeof(visegrad.data[country]) == "undefined")
                            visegrad.data[country] = {
                                person: {},
                                organization: {}
                            };
                        if (typeof(visegrad.data[country].organization[id]) == "undefined") {
                            visegrad.data[country].organization[id] = {};
                        }
                        if (data.memberships) {
                            data.membershipsCount = {
                                men: 0,
                                women: 0,
                                other: 0
                            };
                            $.each(data.memberships, function (i, item) {
                                (item.person.gender == 'male') ? data.membershipsCount.men++ : ((item.person.gender == 'female') ? data.membershipsCount.women++ : data.membershipsCount.other++);
                            })
                        }
                        visegrad.data[country].organization[id] = data;
                        localStorage.setItem('visegradWidgetData', JSON.stringify(visegrad.data));
                        generateOrganizationTemplate(el, data);
                    },
                    error: function () {
                        generateErrorLog(el, 'visengard-widget-organization');
                    }
                });
            }
        } else {
            generateErrorLog(el, 'visengard-widget-organization');
        }
    }

    function jsonDataOrganizationMembers(el) {
        var json_url = el.attr('data-api-endpoint') || visegrad.json_url,
            country = el.attr('data-country') + '/' + el.attr('data-parliament'),
            id = el.attr('data-id');

        if (id) {
            if (typeof(visegrad.data[country]) !== "undefined" && typeof(visegrad.data[country].organization[id]) !== "undefined" && visegrad.data[country].organization[id] !== null) {
                generateListTemplate(el, visegrad.data[country].organization[id]);
            } else {
                if (typeof(visegrad.cache[country]) !== "undefined" && typeof(visegrad.cache[country].organization[id]) !== "undefined" && visegrad.cache[country].organization[id] != null)
                    generateListTemplate(el, visegrad.cache[country].organization[id]);

                $.ajax({
                    url: json_url + '/' + country + '/organizations/' + id + '?embed=["memberships.person"]',
                    dataType: 'json',
                    success: function (data) {
                        if (typeof(visegrad.data[country]) == "undefined")
                            visegrad.data[country] = {
                                person: {},
                                organization: {}
                            };
                        if (typeof(visegrad.data[country].organization[id]) == "undefined") {
                            visegrad.data[country].organization[id] = {};
                        }
                        if (data.memberships) {
                            data.membershipsCount = {
                                men: 0,
                                women: 0,
                                other: 0
                            };
                            $.each(data.memberships, function (i, item) {
                                (item.person.gender == 'male') ? data.membershipsCount.men++ : ((item.person.gender == 'female') ? data.membershipsCount.women++ : data.membershipsCount.other++);
                            })
                        }
                        visegrad.data[country].organization[id] = data;
                        localStorage.setItem('visegradWidgetData', JSON.stringify(visegrad.data));
                        generateListTemplate(el, data);
                    },
                    error: function () {
                        generateErrorLog(el, 'visengard-widget-list');
                    }
                });
            }
        } else {
            $.ajax({
                url: json_url + '/' + country + '/organizations/?where={"classification":"chamber","dissolution_date": {"$exists": false}}',
                dataType: 'json',
                success: function (data) {
                    if (typeof(data._items[0]) == "undefined") {
                        generateEmptyList(el, 'visengard-widget-list');
                    } else {
                        el.attr('data-id', data._items[0].id);
                        jsonDataOrganizationMembers(el);
                    }
                },
                error: function () {
                    generateErrorLog(el, 'visengard-widget-list');
                }
            });
        }
    }

    function generateErrorLog(el, type) {
        var lang = el.attr('data-language') || 'en';
        el.find('.' + type).html(
            $('<div></div>').addClass('visegrad-widget-error').text(visegrad.lang[lang].errorMsg)
        );
        el.find('.visengard-widget-wrapper > div').css('height', el.height());
        el.find('.visengard-widget-wrapper').animate({
            'margin-left': (type == 'visengard-widget-person') ? 0 : ((type == 'visengard-widget-organization') ? -el.width() + 'px' : -(el.width() * 2) + 'px')
        });
        el.find('.' + type + ' .visegrad-widget-error').css('height', 'auto');
    }

    function generateEmptyList(el, type) {
        var lang = el.attr('data-language') || 'en';
        el.find('.' + type).html(
            $('<div></div>').addClass('visegrad-widget-error').text(visegrad.lang[lang].emptyMsg)
        );
        el.find('.visengard-widget-wrapper > div').css('height', el.height());
        el.find('.visengard-widget-wrapper').animate({
            'margin-left': (type == 'visengard-widget-person') ? 0 : ((type == 'visengard-widget-organization') ? -el.width() + 'px' : -(el.width() * 2) + 'px')
        });
        el.find('.' + type + ' .visegrad-widget-error').css('height', 'auto');
    }

    function backButton(el, type) {
        if (el.attr('data-back') && el.find('.visengard-widget-back-to-begin').length == 0)
            el.append(
                $('<a></a>').attr({
                    'href': '#' + el.attr('data-back'),
                    'target': '_self'
                }).addClass('visengard-widget-back-to-begin').click(function (e) {
                    e.preventDefault();
                    backToBegin(el);
                })
            );
        var backBtn = el.find('.visengard-widget-back-to-begin'),
            backData = backBtn.attr('data-back');

        if (backData)
            backData = JSON.parse(backBtn.attr('data-back'));
        else
            backData = [];

        backData.push({'context': type, 'id': el.attr('data-id')});

        backBtn.attr('data-back', JSON.stringify(backData))
    }

    function backToBegin(el) {
        var backBtn = el.find('.visengard-widget-back-to-begin'),
            backData = JSON.parse(backBtn.attr('data-back')),
            backJump = backData.pop();

        if (backJump) {
            if (backData.length) {
                backBtn.attr('data-back', JSON.stringify(backData));
            } else {
                backBtn.remove();
            }

            el.attr({'data-context': backJump.context, 'data-id': backJump.id});

            if (el.attr('data-context') == 'person') {
                jsonDataPerson(el);
            } else if (el.attr('data-context') == 'organization') {
                jsonDataOrganization(el);
            } else if (el.attr('data-context') == 'organization_members') {
                jsonDataOrganizationMembers(el);
            }
        } else {
            backBtn.remove();
        }
    }

    /******** Our main function ********/
    function main() {
        /******* Web Storage *******/
        if (typeof(Storage) !== "undefined") {
            visegrad.storage = true;
            if (localStorage.getItem('visegradWidgetData'))
                visegrad.cache = JSON.parse(localStorage.getItem('visegradWidgetData'));
        }

        jQuery(document).ready(function ($) {
            visegrad.widgets = $(document).find('.parldata-widget');

            $.each(visegrad.widgets, function () {
                var that = $(this);

                that.append(
                    $('<div></div>').addClass('visengard-widget-wrapper').append(
                        $('<div></div>').addClass('visengard-widget-person').html('&nbsp;')
                    ).append(
                        $('<div></div>').addClass('visengard-widget-organization').html('&nbsp;')
                    ).append(
                        $('<div></div>').addClass('visengard-widget-list').html('&nbsp;')
                    )
                );

                if (that.attr('data-context') == 'person') {
                    jsonDataPerson(that);
                } else if (that.attr('data-context') == 'organization') {
                    jsonDataOrganization(that);
                } else if (that.attr('data-context') == 'organization_members') {
                    jsonDataOrganizationMembers(that);
                }
                resize();
            });
        });
    }

})
(); // We call our anonymous function immediately
