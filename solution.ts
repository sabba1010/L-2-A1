//problem1
export function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }

  if (typeof value === 'number') {
    return value * 10;
  }

  return !value;
}
//problem 2
export function getLength(value: string | any[]): number {
  if (typeof value === 'string') {
    return value.length;
  }

  return value.length;
}
//problem3
export class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}




// problem4

export type RatedItem = {
  title: string;
  rating: number;
};

export function filterByRating(items: RatedItem[]): RatedItem[] {
  return items.filter((item) => item.rating >= 4);
}




// problem5
export type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

export function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
}



// problem6
export interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

export function printBookDetails(book: Book): string {
  const availability = book.isAvailable ? 'Yes' : 'No';
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}







// problem7


type Primitive = string | number;

export function getUniqueValues(arr1: Primitive[], arr2: Primitive[]): Primitive[] {
  const result: Primitive[] = [];
  let index = 0;

  function contains(list: Primitive[], value: Primitive): boolean {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const current = arr1[i];
    if (!contains(result, current)) {
      result[index] = current;
      index++;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    const current = arr2[j];
    if (!contains(result, current)) {
      result[index] = current;
      index++;
    }
  }



  return result;
}


// problem8
export type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

export function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  const subtotals = products.map((product) => {
    const baseTotal = product.price * product.quantity;

    if (typeof product.discount === 'number' && product.discount > 0) {
      const clampedDiscount =
        product.discount < 0 ? 0 : product.discount > 100 ? 100 : product.discount;
      const discountAmount = (baseTotal * clampedDiscount) / 100;
      return baseTotal - discountAmount;
    }

    return baseTotal;
  });

  const total = subtotals.reduce((acc, current) => acc + current, 0);
  return total;
}


