import { css } from 'react-emotion';

const AnnotationCss = css`
  .annotationLayer section {
    position: absolute;
  }

  .annotationLayer .linkAnnotation > a {
    position: absolute;
    font-size: 1em;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .annotationLayer .linkAnnotation > a /* -ms-a */ {
    background: url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')
      0 0 repeat;
  }

  .annotationLayer .linkAnnotation > a:hover {
    opacity: 0.2;
    background: #ff0;
  }

  .annotationLayer .textAnnotation img {
    position: absolute;
    cursor: pointer;
  }

  .annotationLayer .textWidgetAnnotation input,
  .annotationLayer .textWidgetAnnotation textarea,
  .annotationLayer .choiceWidgetAnnotation select,
  .annotationLayer .buttonWidgetAnnotation.checkBox input,
  .annotationLayer .buttonWidgetAnnotation.radioButton input {
    background-color: rgba(0, 54, 255, 0.13);
    border: 1px solid transparent;
    box-sizing: border-box;
    font-size: 9px;
    height: 100%;
    margin: 0;
    padding: 0 3px;
    vertical-align: top;
    width: 100%;
  }

  .annotationLayer .choiceWidgetAnnotation select option {
    padding: 0;
  }

  .annotationLayer .buttonWidgetAnnotation.radioButton input {
    border-radius: 50%;
  }

  .annotationLayer .textWidgetAnnotation textarea {
    font: message-box;
    font-size: 9px;
    resize: none;
  }

  .annotationLayer .textWidgetAnnotation input[disabled],
  .annotationLayer .textWidgetAnnotation textarea[disabled],
  .annotationLayer .choiceWidgetAnnotation select[disabled],
  .annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],
  .annotationLayer .buttonWidgetAnnotation.radioButton input[disabled] {
    background: none;
    border: 1px solid transparent;
    cursor: not-allowed;
  }

  .annotationLayer .textWidgetAnnotation input:hover,
  .annotationLayer .textWidgetAnnotation textarea:hover,
  .annotationLayer .choiceWidgetAnnotation select:hover,
  .annotationLayer .buttonWidgetAnnotation.checkBox input:hover,
  .annotationLayer .buttonWidgetAnnotation.radioButton input:hover {
    border: 1px solid #000;
  }

  .annotationLayer .textWidgetAnnotation input:focus,
  .annotationLayer .textWidgetAnnotation textarea:focus,
  .annotationLayer .choiceWidgetAnnotation select:focus {
    background: none;
    border: 1px solid transparent;
  }

  .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,
  .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,
  .annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {
    background-color: #000;
    content: '';
    display: block;
    position: absolute;
  }

  .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,
  .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {
    height: 80%;
    left: 45%;
    width: 1px;
  }

  .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before {
    transform: rotate(45deg);
  }

  .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {
    transform: rotate(-45deg);
  }

  .annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {
    border-radius: 50%;
    height: 50%;
    left: 30%;
    top: 20%;
    width: 50%;
  }

  .annotationLayer .textWidgetAnnotation input.comb {
    font-family: monospace;
    padding-left: 2px;
    padding-right: 0;
  }

  .annotationLayer .textWidgetAnnotation input.comb:focus {
    /*
   * Letter spacing is placed on the right side of each character. Hence, the
   * letter spacing of the last character may be placed outside the visible
   * area, causing horizontal scrolling. We avoid this by extending the width
   * when the element has focus and revert this when it loses focus.
   */
    width: 115%;
  }

  .annotationLayer .buttonWidgetAnnotation.checkBox input,
  .annotationLayer .buttonWidgetAnnotation.radioButton input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    padding: 0;
  }

  .annotationLayer .popupWrapper {
    position: absolute;
    width: 20em;
  }

  .annotationLayer .popup {
    position: absolute;
    z-index: 200;
    max-width: 20em;
    background-color: #ffff99;
    box-shadow: 0px 2px 5px #333;
    border-radius: 2px;
    padding: 0.6em;
    margin-left: 5px;
    cursor: pointer;
    font: message-box;
    word-wrap: break-word;
  }

  .annotationLayer .popup h1 {
    font-size: 1em;
    border-bottom: 1px solid #000000;
    margin: 0;
    padding-bottom: 0.2em;
  }

  .annotationLayer .popup p {
    margin: 0;
    padding-top: 0.2em;
  }

  .annotationLayer .highlightAnnotation,
  .annotationLayer .underlineAnnotation,
  .annotationLayer .squigglyAnnotation,
  .annotationLayer .strikeoutAnnotation,
  .annotationLayer .lineAnnotation svg line,
  .annotationLayer .squareAnnotation svg rect,
  .annotationLayer .circleAnnotation svg ellipse,
  .annotationLayer .polylineAnnotation svg polyline,
  .annotationLayer .polygonAnnotation svg polygon,
  .annotationLayer .stampAnnotation,
  .annotationLayer .fileAttachmentAnnotation {
    cursor: pointer;
  }
`;

export default AnnotationCss;
