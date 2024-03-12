import  React from 'react';

// Komponen Anak
const MyComponent = ({ name }) => {
    return <h1>Halo Semua, {name}!</h1>;
};
const Umur = ({ age }) => {
    return <h1>Umur Saya {age}!</h1>;
};

// Komponen Induk
const Props = () => {
    const name = "Indry";
    const age = 21;
    return (
        <div>
            <h2>Ini adalah Contoh dari Props reactJs</h2>
            <MyComponent name={name} />
            <Umur age={age} />
        </div>
    );
};

export default Props;

