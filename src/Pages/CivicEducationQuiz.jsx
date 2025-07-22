// Add to quiz options:
<div 
  role="button"
  tabIndex={0}
  onKeyDown={(e) => e.key === 'Enter' && handleSelect(option)}
>
  {option.text}
</div>