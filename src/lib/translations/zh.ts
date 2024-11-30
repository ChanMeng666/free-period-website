export const zh = {
  common: {
    loading: '加载中...',
    error: '发生错误',
    notFound: '页面未找到'
  },
  navigation: {
    home: '首页',
    products: '产品',
    locations: '位置',
    impact: '影响',
    education: '教育',
    login: '登录',
    register: '立即开始'
  },
  hero: {
    headline: '革新月经护理',
    subheadline: '创新、可持续、人人可及的解决方案',
    cta: {
      primary: '探索产品',
      secondary: '了解更多',
      register: '免费创建账户',
      products: '探索产品'
    }
  },

  products: {
    evolution: {
      title: "产品演进",
      subtitle: "我们迈向零环境影响的旅程",
      v1: {
        title: "FreePeriod 1.0",
        subtitle: "革命性环保智能设备",
        description: "我们第一代智能设备实现了突破性的98.5%碳排放减少，相比传统自动售货机。"
      },
      v2: {
        title: "FreePeriod 2.0",
        subtitle: "新一代进化",
        description: "设定可持续分配设备的新标准，具有更高的能源效率。",
        comingSoon: "即将推出"
      }
    },
    specifications: {
      title: "技术规格",
      power: "功率",
      energy: "年度能耗",
      emissions: "碳排放量",
      type: "产品类型"
    }
  },
  
  impact: {
    chart: {
      title: "碳排放对比",
      v2note: "FreePeriod 2.0 将实现更低的排放量 - 即将推出",
      traditional: "传统自动售货机",
      freePeriod: "FreePeriod 智能设备",
      power: "功率消耗",
      energy: "年度能源使用",
      emissions: "碳排放量"
    }
  },


  locations: {
    title: '查找位置',
    subtitle: '发现附近的 FreePeriod 分配器',
    search: {
      placeholder: '搜索位置或地址...'
    },
    type: {
      hospital: '医院',
      mall: '商场',
      school: '教育机构'
    },
    status: {
      active: '可使用',
      coming: '即将开放'
    }
  },
  impact: {
    title: '我们的影响',
    subtitle: '提升月经护理的可及性',
    metrics: {
      users: '活跃用户',
      waste: '减少废弃物',
      satisfaction: '用户满意度'
    },
    trends: {
      up: '↑ 上升',
      down: '↓ 下降'
    },
    chart: {
      title: '影响力增长趋势',
      placeholder: '图表展示即将推出'
    },
    stories: {
      title: '影响力故事',
      school: {
        location: '香港大学',
        quote: 'FreePeriod分配器的安装为我们的校园社区带来了重大改变。'
      },
      hospital: {
        location: '中心医院',
        quote: 'FreePeriod帮助我们为患者和员工提供更好的关怀和支持。'
      }
    }
  },
  education: {
    title: '教育与资源',
    subtitle: '了解更多关于月经健康和我们的解决方案',
    resources: {
      guide: {
        title: '使用指南',
        description: '全面的FreePeriod产品使用指南'
      },
      tutorial: {
        title: '视频教程',
        description: '安装和使用的分步视频说明'
      },
      workshop: {
        title: '在线工作坊',
        description: '月经健康教育互动课程'
      }
    },
    downloads: {
      title: '可下载资源',
      brochure: {
        title: '产品手册'
      },
      manual: {
        title: '用户手册'
      }
    },
    faq: {
      title: '常见问题',
      usage: {
        question: '如何使用FreePeriod产品？',
        answer: '我们的产品设计直观易用。只需按照分配器上的说明操作即可。'
      },
      maintenance: {
        question: '分配器需要多久维护一次？',
        answer: '我们建议每月进行维护检查以确保最佳性能。'
      },
      availability: {
        question: '在哪里可以找到FreePeriod分配器？',
        answer: '我们的分配器在学校、医院和公共设施等多个地点都有提供。'
      }
    }
  },
  auth: {
    fields: {
      email: '电子邮箱',
      password: '密码',
      firstName: '名',
      lastName: '姓'
    },
    login: {
      title: '登录您的账户',
      subtitle: '欢迎回来',
      remember: '记住我',
      forgot: '忘记密码？',
      submit: '登录',
      loading: '登录中...',
      register: '没有账户？注册'
    },
    register: {
      title: '创建账户',
      subtitle: '立即加入FreePeriod',
      submit: '注册',
      loading: '创建账户中...',
      login: '已有账户？登录'
    },
    reset: {
      title: '重置密码',
      subtitle: '我们将通过电子邮件发送说明',
      submit: '发送说明',
      loading: '发送中...',
      success: '请查看您的邮箱获取重置说明',
      back: '返回登录'
    }
  }
} as const; 