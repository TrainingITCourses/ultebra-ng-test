# 2 - Pruebas de componentes... con integración superficial

## Pruebas de Angular con TestBed

---

## TestBed

- Al probar la vista en componente necesitamos

  - Pedirle a Angular que compile un componente

    - Necesita un modulo con sus dependencias:
    - de código(servicios)
    - y vista(directivas y componentes)

- Pero podemos ir a mínimos y usar dobles simples en lugar de las dependencias.

---

## Estructura de tests

### 1 - Crear un módulo temporal con lo mínimo

    `await TestBed.configureTestingModule({}).compileComponents();`

### 2 - Crear un componente manejable

    `fixture = TestBed.createComponent(Component);`

### 3 - Acceder a su controlador, la vista previa y el DOM resultante

    `component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    nativeEl = fixture.nativeElement;`

### 4 - Forzar la renderización

    `fixture.detectChanges();`

---

### snippet

```json
  "Jasmine Angular Component View": {
    "prefix": "ab-jas-ngcv",
    "body": [
      "import { DebugElement } from '@angular/core';",
      "import { ComponentFixture, TestBed } from '@angular/core/testing';",
      "import { $1Component } from './${1/(.*)/${1:/downcase}/}.component';",
      "",
      "describe('GIVEN the $1Component', () => {",
      "  let component: $1Component;",
      "  let fixture: ComponentFixture<$1Component>;",
      "  let debugEl: DebugElement;",
      "  let nativeEl: HTMLElement;",
      "",
      "  beforeEach(async () => {",
      "    // Arrange",
      "    await TestBed.configureTestingModule({",
      "      declarations: [$1Component],",
      "    }).compileComponents();",
      "    fixture = TestBed.createComponent($1Component);",
      "    component = fixture.componentInstance;",
      "    debugEl = fixture.debugElement;",
      "    nativeEl = fixture.nativeElement;",
      "  });",
      "  describe('WHEN $2', () => {",
      "    beforeEach(() => {",
      "      // Act",
      "     fixture.detectChanges();",
      "    });",
      "",
      "    it('THEN $3', () => {",
      "      // Act",
      "      const actual = '';$0",
      "      // Assert",
      "      const expected = '';",
      "      expect(actual).toEqual(expected);",
      "    });",
      "  });"
      "});"
    ],
    "description": "GWT para compoentes Angular con Jasmine"
  }
```

---

## 1 - Probando la renderización en un componente simple

`src\app\domain\about\about.component.spec.ts`

Sin dependencias.

Sólo el módulo y el componente _compilado_.

Accedemos al resultado de la ejecución consultando

### El DOM a través de la referencia nativa

`nativeEl.querySelector('')`

### La plantilla a través de la referencia de depuración

`debugEl.query(By.css('')).nativeElement`

---

## 2 - Probando la renderización en un componente complejo

`src\app\domain\home\home.component.spec.ts`

### Creamos los **stubs** necesarios con `jasmine.createSpyObj<>`

### Preparamos las respuestas _fake_ imprescindibles

### Aprovechamos la **inversión de control** en _providers_

````typescript
providers: [
  {provide : Dependency, useValue: stub}
]```

---

> > By [Alberto Basalo](https://twitter.com/albertobasalo)
````
