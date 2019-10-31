(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));n(167),n(170),n(169),n(171),n(172),n(0);var o=n(178);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var i={id:"use-form",title:"useForm() hook"},b=[{value:"Usage from outside <Formiz>",id:"usage-from-outside-formiz",children:[]},{value:"Usage from a child component of <Formiz>",id:"usage-from-a-child-component-of-formiz",children:[]},{value:"Hook values",id:"hook-values",children:[{value:"submit()",id:"submit",children:[]},{value:"isValid",id:"isvalid",children:[]},{value:"isSubmitted",id:"issubmitted",children:[]},{value:"values",id:"values",children:[]},{value:"invalidateFields()",id:"invalidatefields",children:[]},{value:"reset()",id:"reset",children:[]},{value:"resetKey",id:"resetkey",children:[]},{value:"getFieldStepName(fieldName)",id:"getfieldstepnamefieldname",children:[]},{value:"currentStep",id:"currentstep",children:[]},{value:"steps",id:"steps",children:[]},{value:"isStepValid",id:"isstepvalid",children:[]},{value:"isStepSubmitted",id:"isstepsubmitted",children:[]},{value:"isFirstStep",id:"isfirststep",children:[]},{value:"isLastStep",id:"islaststep",children:[]},{value:"submitStep()",id:"submitstep",children:[]},{value:"nextStep()",id:"nextstep",children:[]},{value:"prevStep()",id:"prevstep",children:[]},{value:"goToStep(name)",id:"gotostepname",children:[]}]}],l={rightToc:b},a="wrapper";function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(a,r({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use this hook to access values and methods from a ",Object(o.b)("inlineCode",{parentName:"p"},"<Formiz>")," component."),Object(o.b)("h2",{id:"usage-from-outside-formiz"},"Usage from outside ",Object(o.b)("inlineCode",{parentName:"h2"},"<Formiz>")),Object(o.b)("h4",{id:"1-connect-your-form"},"1. Connect your form"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { Formiz, useForm } from '@formiz/core'\nimport { MyField } from './MyField'\n\nexport const MyForm = () => {\n  const myForm = useForm()\n\n  return (\n    <Formiz connect={myForm}>\n      {/* Your fields here */}\n    </Formiz>\n  )\n}\n")),Object(o.b)("h4",{id:"2-access-values-and-methods"},"2. Access values and methods"),Object(o.b)("p",null,"You have now access to the form."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { Formiz, useForm } from '@formiz/core'\nimport { MyField } from './MyField'\n\nexport const MyForm = () => {\n  const myForm = useForm()\n\n  return (\n    <Formiz connect={myForm}>\n      <form onSubmit={myForm.submit}>\n        {myForm.isValid && 'The form is valid!'}\n        {/* Your fields here */}\n        <button type=\"submit\">\n          Submit\n        </button>\n      <form>\n    </Formiz>\n  )\n}\n")),Object(o.b)("h2",{id:"usage-from-a-child-component-of-formiz"},"Usage from a child component of ",Object(o.b)("inlineCode",{parentName:"h2"},"<Formiz>")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { Formiz, useForm } from '@formiz/core'\nimport { MyField } from './MyField'\n\nexport const MySubComponent = () => {\n  const myForm = useForm()\n\n  return myForm.isValid && 'The form is valid!';\n}\n\nexport const MyForm = () => {\n  return (\n    <Formiz>\n      ...\n      <MySubComponent />\n      ...\n    </Formiz>\n  )\n}\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"hook-values"},"Hook values"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"useForm")," return an object with the following properties:"),Object(o.b)("h3",{id:"submit"},Object(o.b)("inlineCode",{parentName:"h3"},"submit()")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Allow you to submit the form")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),'<Formiz connect={myForm}>\n  <form onSubmit={myForm.submit}>\n    {/* Your fields here */}\n    <button type="submit">\n      Submit\n    </button>\n  </form>\n</Formiz>\n')),Object(o.b)("h3",{id:"isvalid"},Object(o.b)("inlineCode",{parentName:"h3"},"isValid")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Returns true if the form is valid.")),Object(o.b)("h3",{id:"issubmitted"},Object(o.b)("inlineCode",{parentName:"h3"},"isSubmitted")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Returns true if the form is submitted.")),Object(o.b)("h3",{id:"values"},Object(o.b)("inlineCode",{parentName:"h3"},"values")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Returns an object with all the values of the form.")),Object(o.b)("h3",{id:"invalidatefields"},Object(o.b)("inlineCode",{parentName:"h3"},"invalidateFields()")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Allow you to invalidate one or many fields.",Object(o.b)("br",null),"\nUseful for API errors or other external errors.")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"invalidateFields([\n  'fieldName': 'My error message',\n  'secondFieldName': 'Another error message',\n])\n")),Object(o.b)("h3",{id:"reset"},Object(o.b)("inlineCode",{parentName:"h3"},"reset()")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Allows to reset the form with all fields values to their defaultValue.")),Object(o.b)("h3",{id:"resetkey"},Object(o.b)("inlineCode",{parentName:"h3"},"resetKey")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Allows you to reset some internal state when the form is reset.")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"useEffect(() => {\n  // Reset stuff here\n}, [myForm.resetKey]);\n")),Object(o.b)("h3",{id:"getfieldstepnamefieldname"},Object(o.b)("inlineCode",{parentName:"h3"},"getFieldStepName(fieldName)")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Allows you to get the step name of a field.")),Object(o.b)("h3",{id:"currentstep"},Object(o.b)("inlineCode",{parentName:"h3"},"currentStep")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Returns the current step name.")),Object(o.b)("h3",{id:"steps"},Object(o.b)("inlineCode",{parentName:"h3"},"steps")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Returns an array with all the steps of the form.")),Object(o.b)("h3",{id:"isstepvalid"},Object(o.b)("inlineCode",{parentName:"h3"},"isStepValid")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Returns true if the current step is valid.\nReturns an array with all the steps of the form.")),Object(o.b)("h3",{id:"isstepsubmitted"},Object(o.b)("inlineCode",{parentName:"h3"},"isStepSubmitted")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Returns true if the current step is submitted.")),Object(o.b)("h3",{id:"isfirststep"},Object(o.b)("inlineCode",{parentName:"h3"},"isFirstStep")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Returns true if the current step is the first step.")),Object(o.b)("h3",{id:"islaststep"},Object(o.b)("inlineCode",{parentName:"h3"},"isLastStep")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Returns true if the current step is the last step.")),Object(o.b)("h3",{id:"submitstep"},Object(o.b)("inlineCode",{parentName:"h3"},"submitStep()")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Allows you to submit the current step.")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),'<Formiz connect={myForm}>\n  <form onSubmit={myForm.submitStep}>\n    <FormizStep name="step1">\n      {/* Your fields here */}\n    </FormizStep>\n    <FormizStep name="step2">\n      {/* Your fields here */}\n    </FormizStep>\n    <button type="submit">\n      Submit\n    </button>\n  </form>\n</Formiz>\n')),Object(o.b)("h3",{id:"nextstep"},Object(o.b)("inlineCode",{parentName:"h3"},"nextStep()")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Move to the next step.")),Object(o.b)("h3",{id:"prevstep"},Object(o.b)("inlineCode",{parentName:"h3"},"prevStep()")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Move to the previous step.")),Object(o.b)("h3",{id:"gotostepname"},Object(o.b)("inlineCode",{parentName:"h3"},"goToStep(name)")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Go to a specific step.")))}s.isMDXComponent=!0}}]);