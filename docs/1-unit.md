# 1 - Pruebas unitarias de aplicaciones Angular

## Pruebas de Angular sin Angular

---

## Karma... y Jasmine

- preconfigurado
- autogenerado
- scriptable

---

### Cambios recomendados en `Karma.conf.js`

```javascript
plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-mocha-reporter'),
      require('karma-jasmine-diff-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
browsers: ['ChromeHeadless'],
reporters: ['jasmine-diff', 'mocha'],
```

---

## Estructura de tests

- **AAA** Arrange Act Assert
- _describe_ => _before_ => _it_
- **IT** It Should (simple)
- **GWT** Given When Then (behavior)

---

### snippets

```json
  "Jasmine It Should": {
    "prefix": "ab-jas-is",
    "body": [
      "describe('$1', () => {",
      "  let sut;",
      "  beforeEach(() => {",
      "    // Arrange",
      "    sut = new SubjectUnderTest();",
      "  });",
      "  it('should $2', () => {",
      "    // Act",
      "    const actual = sut.callMethod();",
      "    // Assert",
      "    const expected = something;",
      "    expect(actual).toEqual(expected);",
      "  });",
      "});",
    ],
    "description": "Esqueleto simple IS con Jasmine"
  },
```

---

```json
  "Jasmine Given When Then": {
    "prefix": "ab-jas-gwt",
    "body": [
      "describe('$1', () => {",
      "  describe('GIVEN: $2', () => {",
      "    let sut = null;",
      "    let actual = null;",
      "    beforeEach(() => {",
      "     sut = new SubjectUnderTest(); // Arrange",
      "    });",
      "    describe('WHEN $3', () => {",
      "      beforeEach(() => {",
      "       actual = sut.callMethod(); //Act",
      "      });",
      "      it('THEN should $4', () => {",
      "        const expected= null;",
      "        expect(actual).toEqual(expected);// assert",
      "      });",
      "    });",
      "  });",
      "});"
    ],
    "description": "Esqueleto GWT para usar con Jasmine"
}
```

---

## 1 - Probando un servicio como una clase SIN dependencias

`src\app\domain\home\home.logic.service.spec.ts`

Probar un servicio con métodos de lógica de negocio.

Sin dependencias.

Métodos _puros_.

---

## 2 - Probando un servicio como una clase CON dependencias

`src\app\shared\data\util.service.spec.ts`

> Queremos hacer tests **unitarios**.

Usamos un **doble** en lugar de la dependencia original.

Probamos el buen comportamiento con los colaboradores

- ¿Qué métodos se llaman?

- ¿Cuántas veces?

- ¿Con qué argumentos?

Con _Jasmine_ usar un **spy** es lo habitual.

---

## 3 - Probando un servicio como una clase CON dependencias y datos funcionales

`src\app\domain\home\home.data.service.spec.ts`

> Queremos hacer tests **unitarios pero más funcionales**.

Usamos un **doble** en lugar de la dependencia original, pero esta vez con respuestas pregrabadas: un **stub**.

Probamos el uso de las respuestas de los colaboradores

- ¿Qué hago con la respuesta?

Con _Jasmine_ seguimos usando un **spy** aunque se use como **stub**

---

## 4 - Probando el controlador de un componente como una clase

`src\app\domain\about\about.component.spec.ts`

> Queremos hacer tests **unitarios de un controlador**.

Tratamos al controlador exactamente igual que un servicio.

- No hace falta Angular

- Sólo Jasmine para las dependencias

---

> > By [Alberto Basalo](https://twitter.com/albertobasalo)
