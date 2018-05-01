export interface Item {
  id: string;
  name: string;
  size: string;
  qty: number;
}

export function generateMockItem(): Item {
  return {
    id: '1',
    name: 'top',
    size: 'l',
    qty: 1
  };
}
