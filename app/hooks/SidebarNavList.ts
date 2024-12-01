export const mainNavLinks = [
    {
        title: 'الإحصائيات',
        link: '/dashboard/stat',
        icon: 'bar-chart-2-line',
        isCollapsable: false
    },
    {
        title: 'المنتجات',
        link: '/dashboard/products',
        icon: 'archive-2-line',
        isCollapsable: false
    },
    {
        title: 'التصنيفات',
        link: '/dashboard/categories',
        icon: 'stack-line',
        isCollapsable: false
    },
    {
        title: 'العملاء',
        link: '/dashboard/customers',
        icon: 'group-line',
        isCollapsable: false
    },
    {
        title: 'الموردين',
        link: '/dashboard/suppliers',
        icon: 'p2p-line',
        isCollapsable: false
    },
    {
        title: 'الفروع',
        link: '/dashboard/branches',
        icon: 'building-line',
        isCollapsable: false
    },
    {
        title: 'العروض الترويجية',
        link: '/dashboard/promotions',
        icon: 'coupon-3-line',
        isCollapsable: false
    },
    {
        title: 'الطلبات',
        link: '/dashboard/orders',
        icon: 'clipboard-line',
        isCollapsable: true,
        subNav: [
            {
                title: 'المبيعات',
                link: '/dashboard/orders/sold'
            },
            {
                title: 'المرتجعات',
                link: '/dashboard/orders/returns'
            }
        ]
    },
]

export const financialLinks = [
    {
        title: 'الفواتير',
        link: '/dashboard/receipts',
        icon: 'receipt-line',
        isCollapsable: true,
        subNav:
            [
                {
                    title: 'الفواتير المدفوعة',
                    link: '/dashboard/receipts/payed'
                },
                {
                    title: 'الفواتير الغير مدفوعة',
                    link: '/dashboard/receipts/not-payed'
                },
                {
                    title: 'الفواتير الملغية',
                    link: '/dashboard/receipts/canceled'
                }
            ]
    },
    {
        title: 'المصروفات',
        link: '/dashboard/purchase-orders',
        icon: 'swap-box-line',
        isCollapsable: true,
        subNav:
            [
                {
                    title: 'المصروفات المدفوعة',
                    link: '/dashboard/purchase-orders/payed'
                },
                {
                    title: 'المصروفات الغير مدفوعة',
                    link: '/dashboard/purchase-orders/not-payed'
                },
                {
                    title: 'المصروفات الملغية',
                    link: '/dashboard/purchase-orders/canceled'
                }
            ]
    },
]

export const settingLinks = [
    {
        title: 'الحساب',
        link: '/dashboard/account',
        icon: 'user-line',
        isCollapsable: false,
    },
    {
        title: 'المنشأة',
        link: '/dashboard/establishment',
        icon: 'building-4-line',
        isCollapsable: false,
    },
    {
        title: 'إعدادات عامة',
        link: '/dashboard/general',
        icon: 'settings-3-line',
        isCollapsable: false,
    },
]