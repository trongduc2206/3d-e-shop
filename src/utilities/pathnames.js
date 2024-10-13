const pathnames = {
    home: {
        path: '/',
        title: 'Main page'
    },
    category: {
        watches: {
            path:'/category/watches',
            title: 'All the watches'
        },
        necklaces: {
            path:'/category/necklaces',
            title: 'All the necklaces'
        },
        rings: {
            path:'/category/rings',
            title: 'All the rings'
        },
    },
    product: {
        path:'/product/:productId',
        title: 'Product'
    }
};

export default pathnames;
