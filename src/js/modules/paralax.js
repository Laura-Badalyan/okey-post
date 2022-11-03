function Parallax(wrapper, layers) {
    this.nameSpaces = {
        wrapper: wrapper || '.parallax',
        layers: layers,
        deep: 'data-parallax-deep'
    };
    this.init = function () {
        let self = this,
            parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper);
        parallaxWrappers.forEach((el, i) => {
            (function (i) {
                el.addEventListener('mousemove', function (e) {
                    let x = e.clientX,
                        y = e.clientY
                    layers = el.querySelectorAll(self.nameSpaces.layers);
                    layers.forEach((layer, index) => {
                        (function (index) {
                            let deep = layer.getAttribute(self.nameSpaces.deep),
                                disallow = layer.getAttribute('data-parallax-disallow'),
                                itemX = (disallow && disallow === 'x') ? 0 : x / deep,
                                itemY = (disallow && disallow === 'y') ? 0 : y / deep;
                            if (disallow && disallow === 'both') return;
                            layer.style.transform = 'translateX(' + itemX + '%) translateY(' + itemY + '%)';
                        })(index);
                    })
                })
            })(i);
        })
    };
    this.init();
    return this;
}
export const paralaxFunc = function (wrapper, layers) {
        new Parallax(wrapper, layers);
}