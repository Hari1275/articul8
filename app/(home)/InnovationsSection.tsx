'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const InnovationItem = ({
  icon,
  selectedIcon,
  title,
  isSelected = false,
  onClick,
}: {
  icon: string;
  selectedIcon: string;
  title: string;
  isSelected?: boolean;
  onClick: () => void;
}) => (
  <div
    className={`flex items-center py-6 px-6 ${
      isSelected ? 'bg-[#1130FF] rounded-sm' : 'border-b border-[#00000033]'
    } cursor-pointer transition-all duration-300 `}
    onClick={onClick}
  >
    <Image
      src={isSelected ? selectedIcon : icon}
      alt={title}
      width={26}
      height={26}
      priority
      className={`mr-4 ${isSelected ? '' : ''}`}
    />
    <p
      className={` text-[19px] font-proxima-nova font-[700] leading-[23.14px] sm:text-lg font-medium ${
        isSelected ? 'text-white font-[700]' : 'text-black'
      }`}
    >
      {title}
    </p>
  </div>
);

const ProductCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className='border-b border-[#00000033] pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0'>
    <div className='flex items-center mb-4'>
      <Image
        src={icon}
        alt={title}
        width={26}
        height={26}
        className='mr-3'
        priority
      />
      <p className='text-[23px] font-proxima-nova font-[600] leading-[23px] sm:text-xl font-semibold text-black'>{title}</p>
    </div>
    <p className='text-[16px] font-proxima-nova font-[400] leading-[19.49px]    sm:text-sm text-black leading-relaxed'>{description}</p>
  </div>
);

const innovationData = [
  {
    icon: '/images/icons/data.svg',
    title: 'Data',
    selectedIcon:'images/icons/selected.svg',
    products: [
      {
        icon: '/images/icons/data.svg',
       
        title: 'TruData',
        description:
          'Sift is a powerful tool that creates high-quality datasets for AI model training, resulting in more accurate and efficient AI solutions.',
      },
      {
        icon: '/images/icons/data.svg',
        title: 'DataPrep',
        description:
          'Streamline your data preparation process with our advanced DataPrep tool, ensuring your AI models have the best input possible.',
      },
      {
        icon: '/images/icons/data.svg',
        title: 'DataInsights',
        description:
          'Gain valuable insights from your data with our DataInsights tool, uncovering hidden patterns and trends.',
      },
    ],
  },
  {
    icon: '/images/icons/embedding.svg',
    title: 'Embedding and Recovery',
    selectedIcon:'images/icons/selected.svg',
    products: [
      {
        icon: '/images/icons/embedding.svg',
        title: 'Retrain',
        description:
          'Retrain is a toolkit for creating specialized datasets that evaluate and enhance AI models.',
      },
      {
        icon: '/images/icons/embedding.svg',
        title: 'EmbedMaster',
        description:
          'Create powerful embeddings for your AI models with EmbedMaster, improving performance across various tasks.',
      },
      {
        icon: '/images/icons/embedding.svg',
        title: 'RecoveryTool',
        description:
          'Recover and reconstruct data with our advanced RecoveryTool, ensuring data integrity and completeness.',
      },
    ],
  },
  {
    icon: '/images/icons/model.svg',
    title: 'Advancing Existing Models Architecture',
    selectedIcon:'images/icons/selected.svg',
    products: [
      {
        icon: '/images/icons/model.svg',
        title: 'Retrain',
        description:
          'Retrain is a toolkit for creating specialized datasets that evaluate and enhance AI models.',
      },
      {
        icon: '/images/icons/model.svg',
        title: 'EmbedMaster',
        description:
          'Create powerful embeddings for your AI models with EmbedMaster, improving performance across various tasks.',
      },
      {
        icon: '/images/icons/model.svg',
        title: 'RecoveryTool',
        description:
          'Recover and reconstruct data with our advanced RecoveryTool, ensuring data integrity and completeness.',
      },
    ],
  },
  {
    icon: '/images/icons/agent.svg',
    title: 'New Models and System Architecture ',
    selectedIcon:'images/icons/selected.svg',
    products: [
      {
        icon: '/images/icons/agent.svg',
        title: 'Retrain',
        description:
          'Retrain is a toolkit for creating specialized datasets that evaluate and enhance AI models.',
      },
      {
        icon: '/images/icons/agent.svg',
        title: 'EmbedMaster',
        description:
          'Create powerful embeddings for your AI models with EmbedMaster, improving performance across various tasks.',
      },
      {
        icon: '/images/icons/agent.svg',
        title: 'RecoveryTool',
        description:
          'Recover and reconstruct data with our advanced RecoveryTool, ensuring data integrity and completeness.',
      },
    ],
  },
  {
    icon: '/images/icons/library.svg',
    title: 'A8 Library of Domain & Task',
    selectedIcon:'images/icons/selected.svg',
    products: [
      {
        icon: '/images/icons/library.svg',
        title: 'Retrain',
        description:
          'Retrain is a toolkit for creating specialized datasets that evaluate and enhance AI models.',
      },
      {
        icon: '/images/icons/library.svg',
        title: 'EmbedMaster',
        description:
          'Create powerful embeddings for your AI models with EmbedMaster, improving performance across various tasks.',
      },
      {
        icon: '/images/icons/library.svg',
        title: 'RecoveryTool',
        description:
          'Recover and reconstruct data with our advanced RecoveryTool, ensuring data integrity and completeness.',
      },
    ],
  },
  {
    icon: '/images/icons/scoring.svg',
    title: 'Autonomous Multi-Agent Decisions & Actions',
    selectedIcon:'images/icons/selected.svg',
    products: [
      {
        icon: '/images/icons/scoring.svg',
        title: 'Retrain',
        description:
          'Retrain is a toolkit for creating specialized datasets that evaluate and enhance AI models.',
      },
      {
        icon: '/images/icons/scoring.svg',
        title: 'EmbedMaster',
        description:
          'Create powerful embeddings for your AI models with EmbedMaster, improving performance across various tasks.',
      },
      {
        icon: '/images/icons/scoring.svg',
        title: 'RecoveryTool',
        description:
          'Recover and reconstruct data with our advanced RecoveryTool, ensuring data integrity and completeness.',
      },
    ],
  },
  {
    icon: '/images/icons/system.svg',
    title: 'Scoring and  Evaluation',
    selectedIcon:'images/icons/selected.svg',
    products: [
      {
        icon: '/images/icons/system.svg',
        title: 'Retrain',
        description:
          'Retrain is a toolkit for creating specialized datasets that evaluate and enhance AI models.',
      },
      {
        icon: '/images/icons/system.svg',
        title: 'EmbedMaster',
        description:
          'Create powerful embeddings for your AI models with EmbedMaster, improving performance across various tasks.',
      },
      {
        icon: '/images/icons/system.svg',
        title: 'RecoveryTool',
        description:
          'Recover and reconstruct data with our advanced RecoveryTool, ensuring data integrity and completeness.',
      },
    ],
  },
];

const InnovationsSection = () => {
  const [selectedInnovation, setSelectedInnovation] = useState(0);

  const handleInnovationClick = (index: number) => {
    setSelectedInnovation(index);
  };

  return (
    <section className='sm:pt-20 pt-6 sm:py-20 px-4 bg-[#F2F7FF]'>
      <div className='container mx-auto px-4'>
        <h2 className='hidden sm:block font-space-grotesk text-[26px] sm:text-[56px] font-bold mb-16  sm:leading-[84px] text-center leading-tight'>
          <span className='block mb-2'>
            There are{' '}
            <span className='text-[#FF00C7]'>groundbreaking innovations</span>
          </span>
          <span className='block'>behind the magic.</span>
        </h2>

        <h2 className='sm:hidden font-space-grotesk text-[26px] font-[700] mb-16 text-center leading-[38px]'>
          There are{' '}
          <span className='text-[#FF00C7] inline'>groundbreaking innovations</span>{' '}
          behind the magic.
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 sm:px-10'>
          <div className='space-y-2'>
            {innovationData.map((item, index) => (
              <InnovationItem
                key={index}
                icon={item.icon}
                selectedIcon={item.selectedIcon}
                title={item.title}
                isSelected={index === selectedInnovation}
                onClick={() => handleInnovationClick(index)}
              />
            ))}
          </div>
          <div className='h-[500px] overflow-y-auto'>
            {innovationData[selectedInnovation].products.map(
              (product, index) => (
                <ProductCard
                  key={index}
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationsSection;
