import { useEffect, useState } from 'react';

const useFetchMenu = (menuName) => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch(`${window.location.origin}/wp-json/wp/v2/custom-menus/${menuName}`);
                if (response.ok) {
                    const data = await response.json();
                    setMenu(data);
                } else {
                    // Handle error response
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchMenu();
    }, [menuName]);

    return { menu };
};

export default useFetchMenu;