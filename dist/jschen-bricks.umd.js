(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('lodash-es')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'lodash-es'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jschenComponents = {}, global.Vue, global._));
})(this, (function (exports, vue, lodashEs) { 'use strict';

  const useComponentCommon = (props, picks) => {
      const styleProps = vue.computed(() => lodashEs.pick(props, picks));
      const handleClick = () => {
          if (props.actionType === 'url' && props.url && !props.isEditing) {
              window.location.href = props.url;
          }
      };
      return {
          styleProps,
          handleClick
      };
  };

  const commonDefaultProps = {
      // actions
      actionType: '',
      url: '',
      // size
      height: '',
      width: '373px',
      paddingLeft: '0px',
      paddingRight: '0px',
      paddingTop: '0px',
      paddingBottom: '0px',
      // border type
      borderStyle: 'none',
      borderColor: '#000',
      borderWidth: '0',
      borderRadius: '0',
      // shadow and opacity
      boxShadow: '0 0 0 #000000',
      opacity: '1',
      // position and x,y
      position: 'absolute',
      left: '0',
      top: '0',
      right: '0'
  };
  const textDefaultProps = {
      // basic props - font styles
      text: '正文内容',
      fontSize: '14px',
      fontFamily: '',
      fontWeight: 'normal',
      fontStyle: 'normal',
      textDecoration: 'none',
      lineHeight: '1',
      textAlign: 'left',
      color: '#000000',
      backgroundColor: '',
      ...commonDefaultProps
  };
  const imageDefaultProps = {
      src: 'test.url',
      ...commonDefaultProps
  };
  const shapeDefaultProps = {
      backgroundColor: '',
      ...commonDefaultProps
  };
  const isEditingProp = {
      isEditing: {
          type: Boolean,
          default: false
      }
  };
  const textStylePropNames = lodashEs.without(Object.keys(textDefaultProps), 'actionType', 'url', 'text');
  const imageStylePropsNames = lodashEs.without(Object.keys(imageDefaultProps), 'actionType', 'url', 'src');
  const shapeStylePropsNames = lodashEs.without(Object.keys(imageDefaultProps), 'actionType', 'url');
  const transformToComponentProps = (props) => {
      const mapProps = lodashEs.mapValues(props, (item) => {
          return {
              type: item.constructor,
              default: item
          };
      });
      return { ...mapProps, ...isEditingProp };
  };

  const defaultProps$2 = transformToComponentProps(textDefaultProps);
  // array that contains style props
  var script$2 = vue.defineComponent({
      name: 'l-text',
      props: {
          tag: {
              type: String,
              default: 'div'
          },
          ...defaultProps$2
      },
      setup(props) {
          // 重用并且简化
          // 抽离并且获得 styleProps
          const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames);
          return {
              styleProps,
              handleClick
          };
      }
  });

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
      style: vue.normalizeStyle(_ctx.styleProps),
      class: "l-text-component",
      onClick: _ctx.handleClick
    }, {
      default: vue.withCtx(() => [
        vue.createTextVNode(vue.toDisplayString(_ctx.text), 1 /* TEXT */)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["style", "onClick"]))
  }

  script$2.render = render$2;
  script$2.__scopeId = "data-v-6bf95b7a";
  script$2.__file = "src/components/LText/LText.vue";

  script$2.install = (app) => {
      app.component(script$2.name ? script$2.name : '', script$2);
  };

  const defaultProps$1 = transformToComponentProps(shapeDefaultProps);
  // array that contains style props
  var script$1 = vue.defineComponent({
      name: 'l-shape',
      props: {
          ...defaultProps$1
      },
      setup(props) {
          // 重用并且简化
          // 抽离并且获得 styleProps
          const { styleProps, handleClick } = useComponentCommon(props, shapeStylePropsNames);
          return {
              styleProps,
              handleClick
          };
      }
  });

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", {
      style: vue.normalizeStyle(_ctx.styleProps),
      class: "l-shape-component",
      onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"]))
    }, null, 4 /* STYLE */))
  }

  script$1.render = render$1;
  script$1.__file = "src/components/LShape/LShape.vue";

  script$1.install = (app) => {
      app.component(script$1.name ? script$1.name : '', script$1);
  };

  const defaultProps = transformToComponentProps(imageDefaultProps);
  // array that contains style props
  var script = vue.defineComponent({
      name: 'l-image',
      props: {
          ...defaultProps
      },
      setup(props) {
          const { styleProps, handleClick } = useComponentCommon(props, imageStylePropsNames);
          return {
              styleProps: styleProps,
              handleClick
          };
      }
  });

  const _hoisted_1 = ["src"];

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("img", {
      style: vue.normalizeStyle(_ctx.styleProps),
      class: "l-image-component",
      onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"])),
      src: _ctx.src
    }, null, 12 /* STYLE, PROPS */, _hoisted_1))
  }

  script.render = render;
  script.__scopeId = "data-v-1e970aa2";
  script.__file = "src/components/LImage/LImage.vue";

  script.install = (app) => {
      app.component(script.name ? script.name : '', script);
  };

  const componentList = [
      script$2,
      script$1,
      script
  ];
  const install = (app) => {
      componentList.forEach(component => {
          app.component(component.name ? component.name : '', component);
      });
  };

  exports.LImage = script;
  exports.LShape = script$1;
  exports.LText = script$2;
  exports["default"] = install;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
