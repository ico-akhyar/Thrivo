import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Truck, CreditCard, CheckCircle, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const products = [
  {
    id: 1,
    name: 'Premium Protein Mix',
    price: 2500,
    image: 'https://images.pexels.com/photos/6287662/pexels-photo-6287662.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'High-quality protein powder blend with essential amino acids'
  },
  {
    id: 2,
    name: 'Energy Protein Bars',
    price: 1800,
    image: 'https://images.pexels.com/photos/6928074/pexels-photo-6928074.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Delicious protein bars packed with nutrients and natural ingredients'
  }
];

const paymentMethods = [
  { id: 'jazzcash', name: 'JazzCash', icon: '💳' },
  { id: 'easypaisa', name: 'EasyPaisa', icon: '💰' },
  { id: 'bank', name: 'Bank Transfer', icon: '🏦' },
  { id: 'cod', name: 'Cash on Delivery', icon: '💵' }
];

export default function Buy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [step, setStep] = useState(1);
  const [orderData, setOrderData] = useState({
    quantity: 1,
    customerInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: ''
    },
    paymentMethod: '',
    paymentDetails: {
      accountNumber: '',
      transactionId: ''
    }
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const product = products.find(p => p.id === parseInt(id || '1'));
  
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!currentUser) {
      navigate('/login', { 
        state: { 
          from: `/buy/${id}`,
          message: 'Please sign in to place an order'
        }
      });
    }
  }, [currentUser, navigate, id]);

  // Pre-fill email if user is logged in
  useEffect(() => {
    if (currentUser && currentUser.email) {
      setOrderData(prev => ({
        ...prev,
        customerInfo: {
          ...prev.customerInfo,
          email: currentUser.email
        }
      }));
    }
  }, [currentUser]);

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full mx-4"
        >
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Authentication Required</h2>
          <p className="text-gray-600 mb-6">
            Please sign in to your account to place an order.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
          >
            Sign In
          </button>
        </motion.div>
      </div>
    );
  }
  
  if (!product) {
    return <div>Product not found</div>;
  }

  const subtotal = product.price * orderData.quantity;
  const deliveryFee = 200;
  const total = subtotal + deliveryFee;

  const handleInputChange = (section: string, field: string, value: string | number) => {
    setOrderData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const handleQuantityChange = (value: number) => {
    setOrderData(prev => ({
      ...prev,
      quantity: Math.max(1, value)
    }));
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePlaceOrder = () => {
    // Here you would integrate with your payment processing system
    console.log('Order placed:', orderData);
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full mx-4"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your order. We'll send you a confirmation email shortly with tracking details.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-600">Order ID: <span className="font-medium">#TH{Math.random().toString(36).substr(2, 9).toUpperCase()}</span></p>
            <p className="text-sm text-gray-600">Total: <span className="font-medium">PKR {total.toLocaleString()}</span></p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
          >
            Continue Shopping
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
            <div className="ml-auto text-sm text-gray-600">
              Signed in as: <span className="font-medium">{currentUser.email}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {['Product Details', 'Customer Info', 'Payment'].map((stepName, index) => (
              <div key={stepName} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step > index + 1 ? 'bg-orange-600 text-white' : 
                  step === index + 1 ? 'bg-orange-600 text-white' : 
                  'bg-gray-200 text-gray-600'
                }`}>
                  {step > index + 1 ? '✓' : index + 1}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  step >= index + 1 ? 'text-orange-600' : 'text-gray-400'
                }`}>
                  {stepName}
                </span>
                {index < 2 && (
                  <div className={`w-12 h-0.5 mx-4 ${
                    step > index + 1 ? 'bg-orange-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-orange-100"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Product Details</h2>
                
                <div className="flex items-start space-x-4 mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                    <p className="text-xl font-bold text-orange-600 mt-2">PKR {product.price.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <label className="text-sm font-medium text-gray-700">Quantity:</label>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(orderData.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-medium">{orderData.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(orderData.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleNextStep}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium"
                >
                  Continue to Customer Info
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-orange-100"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Customer Information</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={orderData.customerInfo.name}
                      onChange={(e) => handleInputChange('customerInfo', 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={orderData.customerInfo.phone}
                      onChange={(e) => handleInputChange('customerInfo', 'phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={orderData.customerInfo.email}
                    onChange={(e) => handleInputChange('customerInfo', 'email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-gray-50"
                    placeholder="your.email@example.com"
                    disabled
                  />
                  <p className="text-xs text-gray-500 mt-1">Email is pre-filled from your account</p>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address *</label>
                  <textarea
                    required
                    rows={3}
                    value={orderData.customerInfo.address}
                    onChange={(e) => handleInputChange('customerInfo', 'address', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your complete address"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                  <input
                    type="text"
                    required
                    value={orderData.customerInfo.city}
                    onChange={(e) => handleInputChange('customerInfo', 'city', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Your city"
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={!orderData.customerInfo.name || !orderData.customerInfo.email || !orderData.customerInfo.phone || !orderData.customerInfo.address || !orderData.customerInfo.city}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue to Payment
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-orange-100"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Method</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      onClick={() => setOrderData(prev => ({ ...prev, paymentMethod: method.id }))}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        orderData.paymentMethod === method.id
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{method.icon}</span>
                        <span className="font-medium">{method.name}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {orderData.paymentMethod && orderData.paymentMethod !== 'cod' && (
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <h3 className="font-medium text-blue-900 mb-2">Payment Instructions</h3>
                    <p className="text-blue-800 text-sm mb-3">
                      Please send PKR {total.toLocaleString()} to the following account:
                    </p>
                    <div className="bg-white p-3 rounded border text-sm">
                      <p><strong>Account:</strong> 03001234567</p>
                      <p><strong>Name:</strong> Thrivo Pakistan</p>
                      <p><strong>Amount:</strong> PKR {total.toLocaleString()}</p>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Transaction ID *</label>
                        <input
                          type="text"
                          required
                          value={orderData.paymentDetails.transactionId}
                          onChange={(e) => handleInputChange('paymentDetails', 'transactionId', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          placeholder="Enter transaction ID"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex space-x-4">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    disabled={!orderData.paymentMethod || (orderData.paymentMethod !== 'cod' && !orderData.paymentDetails.transactionId)}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Place Order
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-4 border border-orange-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({orderData.quantity}x)</span>
                  <span className="font-medium">PKR {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">PKR {deliveryFee.toLocaleString()}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-orange-600">PKR {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-orange-600" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-orange-600" />
                  <span>2-3 Days Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-4 h-4 text-orange-600" />
                  <span>Multiple Payment Options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}