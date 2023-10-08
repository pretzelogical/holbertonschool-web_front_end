# sass_css

Sass is a superset of css that adds features like variables, nesting, mixins and much more.

Syntax:
  Variable:
    $variable: val;

    body { property: $variable; }
    ⇓⇓⇓
    body { property: val; }

  Nested assignments:
    body {
      font-size: 10px;
      p {
        font-size: 9px;
      }
    }
    ⇓⇓⇓
    body {
      font-size: 10px;
    }
    body p {
      font-size: 9px;
    }
  
  Mixins:
    @mixin marginLR($size) {
      margin-left: $size;
      margin-right: $size;
    }

    body {
      @include marginLR(12px)
    }
    ⇓⇓⇓
    body {
      margin-left: 12px;
      margin-right: 12px;
    }

    Extend:
      .flexCol {
        display: flex;
        flex-flow: column;
      }

      .note {
        @extend .flexCol;
      }
      ⇓⇓⇓
      .flexCol {
        display: flex;
        flex-flow: column;
      }

      .note {
        display: flex;
        flex-flow: column;
      }
