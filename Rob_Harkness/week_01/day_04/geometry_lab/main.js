// Geometry Function Lab
const geometryLab = {
  rectangle: {
    isSquare({ length, width }) {
      return length === width;
    },
    area({ length, width }) {
      return length * width;
    },
    perimeter({ length, width }) {
      return 2 * length + 2 * width;
    }
  },
  triangle: {
    isEquilateral({ sideA, sideB, sideC }) {
      return sideA / 2 + sideB / 2 === sideC;
    },
    isIsosceles({ sideA, sideB, sideC }) {
      return (
        !this.isEquilateral({ sideA, sideB, sideC }) &&
        (sideA === sideB || sideA === sideC || sideB === sideC)
      );
    },
    isObtuse({ sideA, sideB, sideC }) {
      return (
        sideA * sideA + sideB * sideB < sideC * sideC ||
        sideB * sideB + sideC * sideC < sideA * sideA ||
        sideC * sideC + sideA * sideA < sideB * sideB
      );
    },
    area({ sideA, sideB, sideC }) {
      // js implementation of heron's formula with rounding to 2dp, I think
      const s = (sideA + sideB + sideC) / 2;
      return (
        Math.round(
          Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC)) * 100
        ) / 100
      );
    }
  }
};

const square = { length: 4, width: 4 };
const rectangle = { length: 4, width: 5 };
const equilateraltriangle = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};

const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

console.log(geometryLab.rectangle.isSquare(square));
console.log(geometryLab.rectangle.isSquare(rectangle));

console.log(geometryLab.rectangle.area(rectangle));

console.log(geometryLab.rectangle.perimeter(rectangle));

console.log(geometryLab.triangle.isEquilateral(equilateraltriangle));
console.log(geometryLab.triangle.isEquilateral(triangle));

console.log(geometryLab.triangle.isIsosceles(triangle));
console.log(geometryLab.triangle.isIsosceles(equilateraltriangle));

console.log(geometryLab.triangle.area(equilateraltriangle));
console.log(geometryLab.triangle.area(triangle));

console.log(geometryLab.triangle.isObtuse(equilateraltriangle));
console.log(geometryLab.triangle.isObtuse(triangle));
