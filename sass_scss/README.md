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
  
