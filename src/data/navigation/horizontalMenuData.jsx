const horizontalMenuData = dictionary => [
  // This is how you will normally render submenu
  {
    label: dictionary['navigation'].dashboards,
    icon: 'tabler-smart-home',
    children: [
      // This is how you will normally render menu item
      {
        label: dictionary['navigation'].crm,
        icon: 'tabler-chart-pie-2',
        href: '/dashboards/crm'
      },
      {
        label: dictionary['navigation'].analytics,
        icon: 'tabler-trending-up',
        href: '/dashboards/analytics'
      },
      {
        label: dictionary['navigation'].eCommerce,
        icon: 'tabler-shopping-cart',
        href: '/dashboards/ecommerce'
      },
      {
        label: dictionary['navigation'].academy,
        icon: 'tabler-school',
        href: '/dashboards/academy'
      },
      {
        label: dictionary['navigation'].logistics,
        icon: 'tabler-truck',
        href: '/dashboards/logistics'
      }
    ]
  }
]

export default horizontalMenuData
