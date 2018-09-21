# OST UI FRAMEWORK CSS/SCSS
  มาตราฐานในการเขียน code css/scss ตั้งขึ้นเพื่อให้การเขียน code css/scss เป็นไปในทิศทางเดียวกัน และเป็นตัวช่วยในการสื่อสารให้ภายในทีมและต่างทีมได้เข้าใจตรงกัน สามารถอ่าน ค้นหา ปรับแก้ งานของคนอื่นได้สะดวก และรวดเร็วยิ่งขึ้น

## Table of Contents
- [Root/README.md](../../README.md#ost-ui-framework)<br><br>
- [OSTCSS v.2](#ostcss-v.2)
  - [Class Naming](#class-naming)
  - [Block, Element and Modifier](#block-element-and-modifier)
  - [Important Class](#important-class)

## OSTCSS v.2
  OSTCSS เป็นมาตราฐานของการตั้งชื่อ class ที่ใช้ในการเขียน code HTML CSS/SCSS โดย ณ ปัจจุบัน (29/08/2018) OSTCSS ได้ออกเป็น Version 2 ทำการปรับปรุงการที่ได้ลองใช้  Version 1 ([บทความ OSTCSS V.1](https://medium.com/@dektaiimage/ostcss-10e0fef09d9c)) แล้วเกิดความคิดว่ายังมีอะไรบางอย่างที่ควรจะปรับให้สามารถใช้งานได้ง่ายขึ้น จึงเป็นที่มาของมาตราฐาน OSTCSS v.2

## Class Naming
  OSTCSS V.2 จะมีการปรับเปลี่ยนการตั้งชื่อ class ไปจาก OSTCSS V.1 แต่ก็ยังมีบางส่วนที่ยังใช้เหมือนเดิมคือ 

  - ไม่ตั้งชื่อซ้ำกับ Tag ของ HTML ตัวอย่างเช่น h1 ไม่ควรตั้งชื่อ class เป็น .h1 ควรตั้งชื่อเป็น .title หรือเป็นชื่อ class ที่สื่อความหมายถึงส่วนนั้นๆแทน
  
  - จากเดิม OSTCSS V.1 จะตั้งชื่อ class เป็นตัวพิมพ์เล็กทั้งหมด หากชื่อ class เป็นสองคำให้ใช้เครื่องหมาย `-` คั่นระหว่าง คำ เปลี่ยนมาตั้งชื่อ class แบบ camelCase คือ อักษรตัวแรกของคำจะเป็นตัวพิมพ์ใหญ่ยกเว้นคำแรกเขียนติดกันโดยไม่เว้นวรรค เช่น จากเดิม `.main-title` มาเป็น `.mainTitle` แทน เหตุผลที่เปลี่ยนมาตั้งชื่อ class แบบนี้เพราะในบางครั้งเราไม่สามารถตั้งชื่อ class ให้มีจำนวนคำน้อย ทำให้ชื่อ class เรามีเครื่องหมาย `-` เยอะจนดูรก และเมื่อเราตั้งชื่อ class ตามโครงสร้าง block, element, modifier แล้วทำให้ชื่อ class ของ element มันดูยาวเกินไป 

## Block, Element and Modifier
  OSTCSS V.2 ยังคงมองการแบ่ง UI เป็น <span style="color:#76b24f"><b>Block</b></span>, <span style="color:#4f91b2"><b>Element</b></span> และ <span style="color:#d5635d"><b>Modifier</b></span> แบบเดียวกับใน BEM ตามรูป ตแต่่างกันในส่วนการตั้งชื่อ class ของแต่ละส่วน<br>
  <div>![alt text](_imgDocs/github_captions.jpg "github_captions")</div>
  (แหล่งที่มา : http://getbem.com/assets/github_captions.jpg)

### `Block`
  คือส่วนที่เราสามารถแบ่งออกมาเขียนเป็น component นั้นๆได้โดยยังมีความหมายของตัวมันเองไว้ได้อยู่เมื่อแยกออกจาก component อื่น ตัวอย่างเช่น จากรูปเราสามารถแยกช่อง search ออกมาเป็น Block ได้โดยเราจะเขียนชื่อ class เพื่อกำหนดคุณสมบัติให้มันตามหลักการตั้งชื่อดังนี้

  ```SCSS
  .searchGroup{
    border: 1px solid #000;
    border-radius: 5px;
    padding:5px;
  }
  ```

### `Element`
  <div>![alt text](_imgDocs/search.png "searchGroup")</div>
  คือส่วนหนึ่งของ block ไม่สามารถแยกออกมาอยู่อิสระได้ เพราะจะสูญเสียความหมายไป เช่น จากรูป searchGroup ยังมี Element input, button, icon อยู่ภายใน block ซึ้งจะมีคุณสมบัติของตัวมันตามคุณสมบัติของ block และภายใน Element อาจมี Element ย่อยอีกได้ โดยเราจะเขียนชื่อ class ด้วยการใช้เครื่องหมาย `-` คั่นระหว่างชื่อของ `blockName`และ`elementName` ย่อยนั้น

  ```SCSS
  .searchGroup{
    border: 1px solid #000;
    border-radius: 5px;
    display: flex;
    height: 50px
    width: 300px;
  }
  .searchGroup-input{
    border: 0px;
    padding:5px;
    flex: 1;
  }
  .searchGroup-btn{
    background-color: grey;
    border-radius: 0 5px 5px 0;
    display: flex;
    flex-basis:50px;
    align-content: center;
    justify-items: center;
  }
  .searchGroup-btn-icon{
    font-size: 1.5rem;
  }
  ```
  

### `Modifier`
  คือความสามารถพิเศษที่เพิ่มให้กับตัว block หรือ element เพื่อบอกว่า block หรือ element เช่น ใช้ modifier เพื่อกำหนดสีของ button โดยจะใช้เครื่องหมาย  `--`  นำหน้า class ตัวอย่างเช่น `.—-primary`,`.—-error` , `.—-success` 

  ```SCSS
  .searchGroup-btn{
    background-color: grey;
    border-radius: 0 5px 5px 0;
    display: flex;
    flex-basis:50px;
    align-content: center;
    justify-items: center;
    &.—-primary{
      background-color: blue;
    }
  }
  ```
  ในส่วนของ html หาก block หรือ element มี modifier ให้เขียน modifier ตามหลัง class block หรือ element นั้นๆ
  ```HTML
  <div class="blockName --modifier">
    <div class="blockName-elementName --modifier">
    
    </div>
  </div>
  ```

## Important Class
  ในบางครั้งเราอาจต้องใช้ class ที่มีคุณสมบัติเฉพาะเจาะจง เราจะตั้งชื่อ classโดยมีเครื่องหมาย  `__`  นำหน้า class และใส่ `!important` ให้กับคุณสมบัตินั้นๆ และควรเขียนไฟล์ important นั้นแยกไว้ออกจาก CSS/SCSS อื่นๆ เพื่องานต่อการใช้งาน แต่ถึงอย่างไรควรใช้ class important ให้น้อยที่สุด ควนใช้เมื่อจำเป็น
  ```SCSS
  .__hide{
    display: none!important;
  }
  ```