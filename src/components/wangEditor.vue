<template>
  <div>
    <div style="border: 1px solid #ccc; margin-top: 10px">
      <Toolbar
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
        style="border-bottom: 1px solid #ccc"
      />
      <Editor
        :defaultConfig="editorConfig"
        :mode="mode"
        v-model="valueHtml"
        style="height: 400px; overflow-y: hidden"
        @onCreated="handleCreated"
        @onChange="handleChange"
        @onDestroyed="handleDestroyed"
        @onFocus="handleFocus"
        @onBlur="handleBlur"
        @customAlert="customAlert"
        @customPaste="customPaste"
      />
    </div>
    <div style="margin-top: 10px">
      <textarea
        v-model="valueHtml"
        readonly
        style="width: 100%; height: 200px; outline: none"
      ></textarea>
    </div>
  </div>
</template>

<script>
import "@wangeditor/editor/dist/css/style.css";
import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
export default {
  components: { Editor, Toolbar },
  setup() {
    // 编辑器实例，必须用 shallowRef，重要！
    const editorRef = shallowRef();

    // 内容 HTML
    const valueHtml = ref("<p>hello</p>");

    // 模拟 ajax 异步获取内容
    onMounted(() => {
      setTimeout(() => {
        valueHtml.value = "<p>模拟 Ajax 异步设置内容</p>";
      }, 3500);
    });

    const toolbarConfig = {};
    const editorConfig = {
      placeholder: "请输入内容...",

      MENU_CONF: {},
    };
    // 上传图片的配置
    editorConfig.MENU_CONF["uploadImage"] = {
      // 上传图片的配置
      server: "http://localhost:5000/addImage",
      // // 基本配置
      // form-data fieldName ，默认值 'wangeditor-uploaded-image'
      fieldName: "image",

      // 单个文件的最大体积限制，默认为 2M
      maxFileSize: 2 * 1024 * 1024, // 1M

      // 最多可上传几个文件，默认为 100
      maxNumberOfFiles: 5,

      // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
      allowedFileTypes: ["image/*"],

      // // 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
      // meta: {
      //   token: "xxx",
      //   otherKey: "yyy",
      // },

      // // 将 meta 拼接到 url 参数中，默认 false
      // metaWithUrl: false,

      // 自定义增加 http  header
      headers: {
        // Accept: "text/x-json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IuWMl-aegeeGiiIsImlkIjoiNjQ0OWQxNDc4Y2FiOTc4YjAzM2RkYTAzIiwiaWF0IjoxNjgzNjAwNDcyLCJleHAiOjE2ODM4NTk2NzJ9.5jItuxffbRXZVjcEoMMAVlTIClM76C_-nsbTz7Yt4_w",
      },

      // // 跨域是否传递 cookie ，默认为 false
      // withCredentials: true,

      // // 超时时间，默认为 10 秒
      // timeout: 5 * 1000, // 5 秒
    };
    // 组件销毁时，也及时销毁编辑器，重要！
    onBeforeUnmount(() => {
      const editor = editorRef.value;
      if (editor == null) return;
      editor.destroy();
    });

    // 编辑器回调函数
    const handleCreated = (editor) => {
      console.log("created", editor);
      editorRef.value = editor; // 记录 editor 实例，重要！
    };
    const handleChange = (editor) => {
      console.log("change:", editor.getHtml());
      // console.log("change:", editor.getHtml());
    };
    const handleDestroyed = (editor) => {
      console.log("destroyed", editor);
    };
    const handleFocus = (editor) => {
      console.log("focus", editor);
    };
    const handleBlur = (editor) => {
      console.log("blur", editor);
    };
    const customAlert = (info, type) => {
      alert(`【自定义提示】${type} - ${info}`);
    };
    const customPaste = (editor, event, callback) => {
      console.log("ClipboardEvent 粘贴事件对象", event);

      // 自定义插入内容
      editor.insertText("xxx");

      // 返回值（注意，vue 事件的返回值，不能用 return）
      callback(false); // 返回 false ，阻止默认粘贴行为
      // callback(true) // 返回 true ，继续默认的粘贴行为
    };

    return {
      editorRef,
      mode: "default",
      valueHtml,
      toolbarConfig,
      editorConfig,
      handleCreated,
      handleChange,
      handleDestroyed,
      handleFocus,
      handleBlur,
      customAlert,
      customPaste,
    };
  },
};
</script>
