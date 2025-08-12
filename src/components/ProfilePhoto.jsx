import stefanPic from '../assets/stefanPic.jpg';

const ProfilePhoto = ({ 
  size = 'w-32 h-32', 
  ringGradientFrom = 'from-blue-500',
  ringGradientTo = 'to-purple-600',
  overlayGradientFrom = 'from-blue-500',
  overlayGradientTo = 'to-purple-600',
  className = ''
}) => {
  return (
    <div className={`mx-auto mb-6 relative ${size} ${className}`}>
      <div className={`w-full h-full rounded-full bg-gradient-to-tr ${ringGradientFrom} ${ringGradientTo} p-1 shadow-lg`}>
        <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
          <img 
            src={stefanPic} 
            alt="Profile" 
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
      <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${overlayGradientFrom} ${overlayGradientTo} opacity-20`}></div>
    </div>
  );
};

export default ProfilePhoto;
