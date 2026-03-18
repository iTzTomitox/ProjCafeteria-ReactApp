import React, { useState } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [qty, setQty] = useState(Math.min(Math.max(initial, 1), stock || 1));

  const increase = () => setQty((q) => Math.min(q + 1, stock));
  const decrease = () => setQty((q) => Math.max(1, q - 1));

  const handleAdd = () => {
    if (typeof onAdd === "function") {
      onAdd(qty);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}>
      <button onClick={decrease} disabled={qty <= 1}>
        -
      </button>
      <span>{qty}</span>
      <button onClick={increase} disabled={qty >= stock}>
        +
      </button>
      <button onClick={handleAdd} style={{ marginLeft: 12 }} disabled={stock <= 0}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;