# 2 - Pruebas de componentes... con integración profunda

## Pruebas de Angular con TestBed y directivas

---

## Plantillas, Pipes y Directivas

- Probar el comportamiento superficial requiere profundizar

- Usaremos padres de mentira...

- Y bucearemos en el resultado de los hijos....

---

## 1 - Probando la comunicación externa

`src\app\shared\ui\label-value\label-value.component.spec.ts`

### 1.1 - Creamos un componente parent probador

```typescript
@Component({
  selector: "app-fake-parent",
  template: '<app-real atributes="values"></app-real>',
})
class FakeParentComponent {}
```

### 1.2 - Pero usamos el hijo real

```typescript
await TestBed.configureTestingModule({
  declarations: [FakeParentComponent, LabelValueComponent],
}).compileComponents();
```

---

## 2 - Projects

`src\app\domain\projects\projects.component.spec.ts`
NO_ERRORS_SCHEMA
UiModule
component.ngOnInit();
tick(1000);
fakeAsync

## 3 - Projects/id...

routerTestingModule ngZone whenStable

## 4 - Form nuevo... (model driven...)

whenStable, dispatchEvent

---

> > By [Alberto Basalo](https://twitter.com/albertobasalo)

```


```
