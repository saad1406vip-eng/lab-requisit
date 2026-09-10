import React, { useState, useEffect } from 'react';
import { Trash2, Plus, Download, Printer, X, Search, RotateCcw } from 'lucide-react';

const LabRequisitionApp = () => {
  // قاعدة البيانات الشاملة من الملف المرفق
  const allItems = [
    // ============ كيمياء ============
    { id: 'chm_1', category: 'كيمياء', name: 'TROPONIN MINI VIDAS', code: 'VAVA.2343', boxSize: 60 },
    { id: 'chm_2', category: 'كيمياء', name: 'BETA HCG MINI VIDAS', code: 'VAVA.2345', boxSize: 60 },
    { id: 'chm_3', category: 'كيمياء', name: 'CG +6 ISTAT', code: 'VAVA.3148', boxSize: 25 },
    { id: 'chm_4', category: 'كيمياء', name: 'BNP ISTAT', code: 'VAVA.3149', boxSize: 25 },
    { id: 'chm_5', category: 'كيمياء', name: 'CG+4', code: 'VAVA.3150', boxSize: 25 },
    { id: 'chm_6', category: 'كيمياء', name: 'TROPONINI ISTAT', code: 'VAVA.3161', boxSize: 25 },
    { id: 'chm_7', category: 'كيمياء', name: 'PT/INR ISTAT', code: 'VAVA.3162', boxSize: 24 },
    { id: 'chm_8', category: 'كيمياء', name: 'KIT URINALYSIS', code: 'VAVA.3718', boxSize: 100 },
    { id: 'chm_9', category: 'كيمياء', name: 'شرطة تحليل البول', code: 'VAVA.3719', boxSize: 100 },
    { id: 'chm_10', category: 'كيمياء', name: 'شرطة تحليل الحمل', code: 'VAVA.3751', boxSize: 40 },
    { id: 'chm_11', category: 'كيمياء', name: 'شراب قياس منحني السكر', code: 'VAVA.3752', boxSize: 20 },
    { id: 'chm_12', category: 'كيمياء', name: 'شرطة تحليل السكر', code: 'VAVA.3753', boxSize: 100 },

    // ============ اختبارات بيور ============
    { id: 'bio_1', category: 'اختبارات بيور', name: 'ALP', code: 'VAVA.0312', boxSize: 1100 },
    { id: 'bio_2', category: 'اختبارات بيور', name: 'K', code: 'VAVA.0312', boxSize: 9000 },
    { id: 'bio_3', category: 'اختبارات بيور', name: 'NA', code: 'VAVA.0314', boxSize: 9000 },
    { id: 'bio_4', category: 'اختبارات بيور', name: 'CHOL', code: 'VAVA.0387', boxSize: 2200 },
    { id: 'bio_5', category: 'اختبارات بيور', name: 'HDL', code: 'VAVA.0387', boxSize: 700 },
    { id: 'bio_6', category: 'اختبارات بيور', name: 'IRON', code: 'VAVA.0387', boxSize: 700 },
    { id: 'bio_7', category: 'اختبارات بيور', name: 'LDH', code: 'VAVA.0387', boxSize: 850 },
    { id: 'bio_8', category: 'اختبارات بيور', name: 'LDL', code: 'VAVA.0387', boxSize: 600 },
    { id: 'bio_9', category: 'اختبارات بيور', name: 'ALT', code: 'VAVA.0387', boxSize: 800 },
    { id: 'bio_10', category: 'اختبارات بيور', name: 'GGT', code: 'VAVA.0387', boxSize: 400 },
    { id: 'bio_11', category: 'اختبارات بيور', name: 'GLU', code: 'VAVA.0387', boxSize: 3300 },
    { id: 'bio_12', category: 'اختبارات بيور', name: 'HBA1C', code: 'VAVA.0387', boxSize: 500 },
    { id: 'bio_13', category: 'اختبارات بيور', name: 'LIPASE', code: 'VAVA.0387', boxSize: 200 },
    { id: 'bio_14', category: 'اختبارات بيور', name: 'AMMONIA', code: 'VAVA.0387', boxSize: 300 },
    { id: 'bio_15', category: 'اختبارات بيور', name: 'AMYLASE', code: 'VAVA.0387', boxSize: 750 },
    { id: 'bio_16', category: 'اختبارات بيور', name: 'CK', code: 'VAVA.0387', boxSize: 500 },
    { id: 'bio_17', category: 'اختبارات بيور', name: 'TB', code: 'VAVA.0387', boxSize: 1050 },
    { id: 'bio_18', category: 'اختبارات بيور', name: 'TIBC', code: 'VAVA.0387', boxSize: 100 },
    { id: 'bio_19', category: 'اختبارات بيور', name: 'TRIG', code: 'VAVA.0387', boxSize: 1000 },
    { id: 'bio_20', category: 'اختبارات بيور', name: 'URIC ACID', code: 'VAVA.0387', boxSize: 1300 },
    { id: 'bio_21', category: 'اختبارات بيور', name: 'DB', code: 'VAVA.0387', boxSize: 1000 },
    { id: 'bio_22', category: 'اختبارات بيور', name: 'PHOSPHORUS', code: 'VAVA.0387', boxSize: 750 },
    { id: 'bio_23', category: 'اختبارات بيور', name: 'MG', code: 'VAVA.0387', boxSize: 290 },
    { id: 'bio_24', category: 'اختبارات بيور', name: 'TP', code: 'VAVA.0387', boxSize: 1050 },
    { id: 'bio_25', category: 'اختبارات بيور', name: 'AST', code: 'VAVA.0387', boxSize: 500 },
    { id: 'bio_26', category: 'اختبارات بيور', name: 'UREA', code: 'VAVA.0387', boxSize: 600 },
    { id: 'bio_27', category: 'اختبارات بيور', name: 'MICRO ALB', code: 'VAVA.0387', boxSize: 500 },
    { id: 'bio_28', category: 'اختبارات بيور', name: 'CA', code: 'VAVA.0387', boxSize: 1500 },
    { id: 'bio_29', category: 'اختبارات بيور', name: 'ALB', code: 'VAVA.0387', boxSize: 750 },
    { id: 'bio_30', category: 'اختبارات بيور', name: 'CK-MB', code: 'VAVA.0387', boxSize: 150 },
    { id: 'bio_31', category: 'اختبارات بيور', name: 'CREATININE', code: 'VAVA.0387', boxSize: 2500 },

    // ============ هرمونات ============
    { id: 'horm_1', category: 'هرمونات', name: 'PSA T', code: 'VAVA.0383', boxSize: null },
    { id: 'horm_2', category: 'هرمونات', name: 'CEA', code: 'VAVA.0383', boxSize: null },
    { id: 'horm_3', category: 'هرمونات', name: 'PSA F', code: 'VAVA.0384', boxSize: null },
    { id: 'horm_4', category: 'هرمونات', name: 'INSULIN', code: 'VAVA.0386', boxSize: 'TET / Kit 100' },
    { id: 'horm_5', category: 'هرمونات', name: 'CORTISOL', code: 'VAVA.0384', boxSize: 'TET / Kit 300' },
    { id: 'horm_6', category: 'هرمونات', name: 'PTH', code: 'VAVA.0388', boxSize: 'TET / Kit 300' },
    { id: 'horm_7', category: 'هرمونات', name: 'PROGESTERONE', code: 'VAVA.0388', boxSize: 'TET / Kit 300' },
    { id: 'horm_8', category: 'هرمونات', name: 'ESTRADIOL', code: 'VAVA.0388', boxSize: 'TET / Kit 300' },
    { id: 'horm_9', category: 'هرمونات', name: 'TESTOSTERONE', code: 'VAVA.0388', boxSize: 'TET / Kit 300' },
    { id: 'horm_10', category: 'هرمونات', name: 'HNSULIN', code: 'VAVA.0388', boxSize: 'TET / Kit 100' },
    { id: 'horm_11', category: 'هرمونات', name: 'AFP', code: 'VAVA.0388', boxSize: 'TET / Kit 300' },
    { id: 'horm_12', category: 'هرمونات', name: 'C-PEPTIDE', code: 'VAVA.0388', boxSize: 'TET / Kit 100' },
    { id: 'horm_13', category: 'هرمونات', name: 'B12', code: 'VAVA.0388', boxSize: 'TET / Kit 300' },
    { id: 'horm_14', category: 'هرمونات', name: 'GH', code: 'VAVA.0388', boxSize: 'TET / Kit 100' },
    { id: 'horm_15', category: 'هرمونات', name: 'FT3', code: 'VAVA.0388', boxSize: 'TET / Kit 300' },
    { id: 'horm_16', category: 'هرمونات', name: 'FSH', code: 'VAVA.0388', boxSize: 'TET / Kit 300' },
    { id: 'horm_17', category: 'هرمونات', name: 'TSH', code: 'VAVA.0388', boxSize: 'TET / Kit 300' },
    { id: 'horm_18', category: 'هرمونات', name: 'VD', code: 'VAVA.0388', boxSize: 'TET / Kit 300' },
    { id: 'horm_19', category: 'هرمونات', name: 'FERRITIN', code: 'VAVA.0388', boxSize: 'TET / Kit 300' },
    { id: 'horm_20', category: 'هرمونات', name: 'CA15-3', code: 'VAVA.0388', boxSize: null },
    { id: 'horm_21', category: 'هرمونات', name: 'PROLACTIN', code: 'VAVA.0388', boxSize: 'TET / Kit 300' },
    { id: 'horm_22', category: 'هرمونات', name: 'LH', code: 'VAVA.0388', boxSize: 'TET / Kit 300' },
    { id: 'horm_23', category: 'هرمونات', name: 'BETA HCG', code: 'VAVA.0388', boxSize: null },
    { id: 'horm_24', category: 'هرمونات', name: 'CA19-9', code: 'VAVA.0388', boxSize: null },
    { id: 'horm_25', category: 'هرمونات', name: 'FT4', code: 'VAVA.0388', boxSize: 'TET / Kit 300' },
    { id: 'horm_26', category: 'هرمونات', name: 'DHEA', code: 'VAVA.0388', boxSize: 'TET / Kit 100' },
    { id: 'horm_27', category: 'هرمونات', name: 'CA125', code: 'VAVA.0388', boxSize: 'TET / Kit 300' },
    { id: 'horm_28', category: 'هرمونات', name: 'CA72-4', code: 'VAVA.0388', boxSize: 'TET / Kit 300' },
    { id: 'horm_29', category: 'هرمونات', name: 'ACTIVE B12', code: 'VAVA.0388', boxSize: 'TET / Kit 300' },
    { id: 'horm_30', category: 'هرمونات', name: 'T T4', code: 'VAVA.0388', boxSize: 'TET / Kit 300' },
    { id: 'horm_31', category: 'هرمونات', name: 'T T3', code: 'VAVA.0388', boxSize: 'TET / Kit 300' },

    // ============ مستهلكات ============
    { id: 'cons_1', category: 'مستهلكات', name: 'BAG15*25', code: 'VAVA.1199', boxSize: 1000 },
    { id: 'cons_2', category: 'مستهلكات', name: 'BAG 14*16', code: 'VAVA.1201', boxSize: 2000 },
    { id: 'cons_3', category: 'مستهلكات', name: 'WOODEN STICKS', code: 'VAVA.1212', boxSize: 5000 },
    { id: 'cons_4', category: 'مستهلكات', name: '24 HOURS URINE', code: 'VAVA.1222', boxSize: 30 },
    { id: 'cons_5', category: 'مستهلكات', name: 'TUBE CENTRIFUGE', code: 'VAVA.1223', boxSize: 50 },
    { id: 'cons_6', category: 'مستهلكات', name: 'POLYSTERENE WITHOUT CAP', code: 'VAVA.1228', boxSize: 10000 },
    { id: 'cons_7', category: 'مستهلكات', name: 'POLYSTERENE WITH CAP', code: 'VAVA.1229', boxSize: 500 },
    { id: 'cons_8', category: 'مستهلكات', name: 'STOOL CONTAINER', code: 'VAVA.1245', boxSize: 400 },
    { id: 'cons_9', category: 'مستهلكات', name: 'URINE CONTAINER', code: 'VAVA.1248', boxSize: 400 },
    { id: 'cons_10', category: 'مستهلكات', name: 'URINE CONTAINER 60 ML', code: 'VAVA.1251', boxSize: 800 },
    { id: 'cons_11', category: 'مستهلكات', name: 'COVER SLIP', code: 'VAVA.1296', boxSize: 100 },
    { id: 'cons_12', category: 'مستهلكات', name: 'LANCET ADULT', code: 'VAVA.1517', boxSize: 5000 },
    { id: 'cons_13', category: 'مستهلكات', name: 'LANCET PEDIATRIC', code: 'VAVA.1520', boxSize: 5000 },
    { id: 'cons_14', category: 'مستهلكات', name: 'LENS PAPER', code: 'VAVA.1521', boxSize: 1250 },
    { id: 'cons_15', category: 'مستهلكات', name: 'OIL WOOD', code: 'VAVA.1528', boxSize: 'BOTTLE' },
    { id: 'cons_16', category: 'مستهلكات', name: 'SLIDE', code: 'VAVA.1712', boxSize: 2500 },
    { id: 'cons_17', category: 'مستهلكات', name: 'GLASS SLIDE', code: 'VAVA.1713', boxSize: 2500 },
    { id: 'cons_18', category: 'مستهلكات', name: 'SQUEEZING BALL', code: 'VAVA.1727', boxSize: 500 },
    { id: 'cons_19', category: 'مستهلكات', name: 'SYRINGE ARTERIAL BLOOD', code: 'VAVA.1734', boxSize: 100 },
    { id: 'cons_20', category: 'مستهلكات', name: 'TIPS 100 UL', code: 'VAVA.1788', boxSize: 1000 },
    { id: 'cons_21', category: 'مستهلكات', name: 'TIPS 1000 UL', code: 'VAVA.1789', boxSize: 1000 },
    { id: 'cons_22', category: 'مستهلكات', name: 'PASTEUR PIPETTE', code: 'VAVA.1801', boxSize: 1000 },
    { id: 'cons_23', category: 'مستهلكات', name: 'TUBE PT 3.2', code: 'VAVA.1827', boxSize: 100 },
    { id: 'cons_24', category: 'مستهلكات', name: 'TUBE EDTA', code: 'VAVA.1832', boxSize: 1200 },
    { id: 'cons_25', category: 'مستهلكات', name: 'TUBE NAT', code: 'VAVA.1833', boxSize: 100 },
    { id: 'cons_26', category: 'مستهلكات', name: 'GREEN TUBE', code: 'VAVA.1834', boxSize: 1200 },
    { id: 'cons_27', category: 'مستهلكات', name: 'TUBE PLAIN WITH CLOT ACTIVATOR', code: 'VAVA.1836', boxSize: 1200 },
    { id: 'cons_28', category: 'مستهلكات', name: 'TUBE PLAIN WITHOUT CLOT ACTIVATOR', code: 'VAVA.1837', boxSize: 1200 },
    { id: 'cons_29', category: 'مستهلكات', name: 'YELLOW TUBE', code: 'VAVA.1841', boxSize: 100 },
    { id: 'cons_30', category: 'مستهلكات', name: 'GLASS TUBE', code: 'VAVA.1848', boxSize: 2000 },

    // ============ أمراض الدم ============
    { id: 'blood_1', category: 'أمراض الدم', name: 'CBC XN1000', code: 'VAVA.2453', boxSize: 450 },
    { id: 'blood_2', category: 'أمراض الدم', name: 'CBC XP300', code: 'VAVA.2457', boxSize: 1200 },
    { id: 'blood_3', category: 'أمراض الدم', name: 'CARD ABO REVERSE GROUP', code: 'VAVA.2522', boxSize: 336 },
    { id: 'blood_4', category: 'أمراض الدم', name: 'CARD LISS COOMBS', code: 'VAVA.2523', boxSize: 504 },
    { id: 'blood_5', category: 'أمراض الدم', name: 'CARD COMPLETE CROOMATCH', code: 'VAVA.2528', boxSize: 48 },
    { id: 'blood_6', category: 'أمراض الدم', name: 'CARD A/B/DVI+A/B/DVI', code: 'VAVA.2529', boxSize: 1 },
    { id: 'blood_7', category: 'أمراض الدم', name: 'CARD +CW+K', code: 'VAVA.2530', boxSize: 288 },
    { id: 'blood_8', category: 'أمراض الدم', name: 'ANTIBODY SCREENING 3 CELLS', code: 'VAVA.2528', boxSize: 200 },
    { id: 'blood_9', category: 'أمراض الدم', name: 'ANTIBODY 11 CELLS', code: 'VAVA.2528', boxSize: 1 },
    { id: 'blood_10', category: 'أمراض الدم', name: 'DILUENT 1', code: 'VAVA.2543', boxSize: null },
    { id: 'blood_11', category: 'أمراض الدم', name: 'DILUENT 2', code: 'VAVA.2544', boxSize: null },
    { id: 'blood_12', category: 'أمراض الدم', name: 'HB ELECTROPHORESIS VARIANT II', code: 'VAVA.2553', boxSize: 500 },
    { id: 'blood_13', category: 'أمراض الدم', name: 'TIPS BLOOD BANK', code: 'VAVA.2580', boxSize: null },
    { id: 'blood_14', category: 'أمراض الدم', name: 'ANTI A', code: 'VAVA.2581', boxSize: 'VIAL' },
    { id: 'blood_15', category: 'أمراض الدم', name: 'ANTI B', code: 'VAVA.2583', boxSize: 'VIAL' },
    { id: 'blood_16', category: 'أمراض الدم', name: 'D DIMER LATEX', code: 'VAVA.2585', boxSize: 60 },
    { id: 'blood_17', category: 'أمراض الدم', name: 'PT STAGO', code: 'VAVA.2586', boxSize: 300 },
    { id: 'blood_18', category: 'أمراض الدم', name: 'CBC DXH', code: 'VAVA.2588', boxSize: 150 },
    { id: 'blood_19', category: 'أمراض الدم', name: 'RETIC DXH', code: 'VAVA.2590', boxSize: 800 },
    { id: 'blood_20', category: 'أمراض الدم', name: 'CARD ESR', code: 'VAVA.2591', boxSize: 250 },
    { id: 'blood_21', category: 'أمراض الدم', name: 'ANTI D', code: 'VAVA.2596', boxSize: 'VIAL' },
    { id: 'blood_22', category: 'أمراض الدم', name: 'RAPID MALARIA', code: 'VAVA.2631', boxSize: 40 },
    { id: 'blood_23', category: 'أمراض الدم', name: 'FIBRINOGEN STAGO', code: 'VAVA.2645', boxSize: 450 },
    { id: 'blood_24', category: 'أمراض الدم', name: 'PTT STAGO', code: 'VAVA.2652', boxSize: 1200 },
    { id: 'blood_25', category: 'أمراض الدم', name: 'D DIMER STAGO', code: 'VAVA.2740', boxSize: 240 },
    { id: 'blood_26', category: 'أمراض الدم', name: 'HBA1C VARIANT II', code: 'VAVA.2884', boxSize: null },
    { id: 'blood_27', category: 'أمراض الدم', name: 'CARD NEWBORN', code: 'VAVA.2932', boxSize: 48 },
  ];

  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [requisitionDate, setRequisitionDate] = useState(new Date());

  // تحميل البيانات من localStorage
  useEffect(() => {
    const saved = localStorage.getItem('labRequisition');
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch (e) {
        console.error('خطأ في تحميل البيانات المحفوظة');
      }
    }
  }, []);

  // حفظ البيانات في localStorage
  useEffect(() => {
    localStorage.setItem('labRequisition', JSON.stringify(cart));
  }, [cart]);

  const categories = ['', ...new Set(allItems.map(item => item.category))];
  
  const filteredItems = allItems.filter(item => {
    const matchCategory = !selectedCategory || item.category === selectedCategory;
    const matchSearch = !searchTerm || 
      item.name.includes(searchTerm) || 
      item.code.includes(searchTerm);
    return matchCategory && matchSearch;
  });

  const addToCart = (item) => {
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      setCart(cart.map(c =>
        c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(c =>
        c.id === id ? { ...c, quantity } : c
      ));
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(c => c.id !== id));
  };

  const calculateTotal = (item) => {
    if (!item.boxSize || typeof item.boxSize === 'string') {
      return `${item.quantity} ${item.boxSize || 'وحدة'}`;
    }
    return (item.quantity * item.boxSize).toLocaleString('ar-SA');
  };

  const printRequisition = () => {
    const printWindow = window.open('', '_blank');
    const html = `
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>طلب المستهلكات - المختبر</title>
        <style>
          body { font-family: 'Arial', sans-serif; margin: 20px; background: white; }
          .container { max-width: 800px; margin: 0 auto; }
          .header { text-align: center; border-bottom: 3px solid #0369a1; padding-bottom: 15px; margin-bottom: 20px; }
          .header h1 { color: #0369a1; margin: 0; font-size: 28px; }
          .header p { color: #666; margin: 5px 0; }
          .info-row { display: flex; justify-content: space-between; margin: 10px 0; font-size: 13px; }
          .info-label { color: #666; font-weight: bold; }
          table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          th { background: #0369a1; color: white; padding: 10px; text-align: right; font-weight: bold; }
          td { border-bottom: 1px solid #ddd; padding: 10px; text-align: right; }
          tr:nth-child(even) { background: #f5f5f5; }
          .total-row { background: #e0f2fe; font-weight: bold; }
          .footer { margin-top: 30px; text-align: center; color: #666; font-size: 12px; border-top: 1px solid #ddd; padding-top: 15px; }
          @media print {
            body { margin: 0; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📋 طلب المستهلكات والمواد</h1>
            <p>وزارة الصحة - تجمع عسير الصحي - مستشفى سبت العلاية العام</p>
            <p>قسم المختبرات الطبية</p>
          </div>
          
          <div class="info-row">
            <div>
              <span class="info-label">التاريخ:</span> ${requisitionDate.toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <div>
              <span class="info-label">الوقت:</span> ${requisitionDate.toLocaleTimeString('ar-SA')}
            </div>
          </div>
          <div class="info-row">
            <div>
              <span class="info-label">المسؤول:</span> مدير قسم المختبرات
            </div>
            <div>
              <span class="info-label">الرقم المرجعي:</span> ${Date.now()}
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>اسم المادة/الاختبار</th>
                <th>الفئة</th>
                <th>الكود</th>
                <th>الكمية المطلوبة</th>
                <th>حجم العبوة</th>
                <th>الإجمالي</th>
              </tr>
            </thead>
            <tbody>
              ${cart.map((item, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td><strong>${item.name}</strong></td>
                  <td>${item.category}</td>
                  <td>${item.code}</td>
                  <td>${item.quantity}</td>
                  <td>${item.boxSize || '-'}</td>
                  <td>${calculateTotal(item)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <div class="footer">
            <p>تم إنشاء هذا الطلب رسميًا في ${requisitionDate.toLocaleString('ar-SA')}</p>
            <p>هذا الطلب بمثابة إثبات رسمي للمستهلكات المطلوبة</p>
            <p style="margin-top: 20px; color: #999;">تطبيق إدارة المختبرات الطبية</p>
          </div>
        </div>
      </body>
      </html>
    `;
    printWindow.document.write(html);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 250);
  };

  const exportToCSV = () => {
    if (cart.length === 0) return;
    
    const headers = ['#', 'اسم المادة', 'الفئة', 'الكود', 'الكمية', 'حجم العبوة', 'الإجمالي'];
    const rows = cart.map((item, idx) => [
      idx + 1,
      item.name,
      item.category,
      item.code,
      item.quantity,
      item.boxSize || '-',
      calculateTotal(item)
    ]);

    const csv = [
      ['طلب المستهلكات والمواد - قسم المختبرات'],
      ['التاريخ:', requisitionDate.toLocaleDateString('ar-SA')],
      ['الوقت:', requisitionDate.toLocaleTimeString('ar-SA')],
      [],
      headers,
      ...rows
    ].map(row => row.join('\t')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `lab_requisition_${Date.now()}.csv`;
    link.click();
  };

  const clearCart = () => {
    if (window.confirm('هل تريد مسح جميع العناصر؟')) {
      setCart([]);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50">
      {/* الرأس */}
      <div className="sticky top-0 z-50 bg-white border-b-2 border-blue-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white rounded-lg p-2">
                <span className="text-2xl">🧪</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">مدير طلبات المختبر</h1>
                <p className="text-sm text-gray-600">قسم المختبرات الطبية</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowCart(!showCart)}
                className="relative bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2"
              >
                <span>🛒 الطلبية</span>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {!showCart ? (
          <div className="space-y-6">
            {/* فلاتر البحث */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600">
              <h2 className="text-xl font-bold text-blue-900 mb-4">🔍 البحث والتصفية</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">البحث بالاسم أو الكود</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="ابحث عن مادة أو كود..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">الفئة</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>
                        {cat || 'جميع الفئات'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <strong>{filteredItems.length}</strong> عنصر متاح
              </div>
            </div>

            {/* قائمة المواد */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition border-r-4 border-blue-500 p-4"
                >
                  <div className="space-y-3">
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{item.name}</p>
                      <p className="text-xs text-gray-600 mt-1">الكود: {item.code}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {item.category}
                      </span>
                      {item.boxSize && (
                        <span className="text-gray-600">
                          العبوة: {item.boxSize}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => addToCart(item)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition flex items-center justify-center gap-2"
                    >
                      <Plus size={18} /> أضف للطلبية
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* عرض الطلبية */
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-600">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-green-900">📋 ملخص الطلبية</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {requisitionDate.toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}
                  {' '} - {requisitionDate.toLocaleTimeString('ar-SA')}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">{cart.length}</p>
                <p className="text-sm text-gray-600">عنصر في الطلبية</p>
              </div>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-3xl mb-3">📦</p>
                <p className="text-gray-600 text-lg">الطلبية فارغة</p>
                <p className="text-sm text-gray-500 mt-2">أضف عناصر للبدء</p>
              </div>
            ) : (
              <>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-blue-50 border-b-2 border-blue-200">
                        <th className="text-right p-3 font-bold text-gray-700">#</th>
                        <th className="text-right p-3 font-bold text-gray-700">المادة</th>
                        <th className="text-right p-3 font-bold text-gray-700">الفئة</th>
                        <th className="text-center p-3 font-bold text-gray-700">الكمية</th>
                        <th className="text-center p-3 font-bold text-gray-700">حجم العبوة</th>
                        <th className="text-center p-3 font-bold text-gray-700">الإجمالي</th>
                        <th className="text-center p-3 font-bold text-gray-700">الإجراء</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item, idx) => (
                        <tr key={item.id} className="border-b hover:bg-blue-50">
                          <td className="p-3">{idx + 1}</td>
                          <td className="p-3">
                            <div>
                              <p className="font-semibold text-gray-900">{item.name}</p>
                              <p className="text-xs text-gray-500">{item.code}</p>
                            </div>
                          </td>
                          <td className="p-3">
                            <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                              {item.category}
                            </span>
                          </td>
                          <td className="p-3">
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                              className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:border-blue-500"
                            />
                          </td>
                          <td className="p-3 text-center text-sm text-gray-600">
                            {item.boxSize || '-'}
                          </td>
                          <td className="p-3 text-center font-semibold text-blue-600">
                            {calculateTotal(item)}
                          </td>
                          <td className="p-3 text-center">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-600 hover:text-red-800 transition"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-4 gap-3">
                  <button
                    onClick={printRequisition}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                  >
                    <Printer size={20} /> اطبع الطلبية
                  </button>
                  <button
                    onClick={exportToCSV}
                    className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                  >
                    <Download size={20} /> تصدير CSV
                  </button>
                  <button
                    onClick={clearCart}
                    className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                  >
                    <RotateCcw size={20} /> مسح الطلبية
                  </button>
                  <button
                    onClick={() => setShowCart(false)}
                    className="bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                  >
                    <X size={20} /> العودة
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LabRequisitionApp;