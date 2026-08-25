import React from "react";

const FormField = React.forwardRef(
  ({ icon: Icon, error, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        <div
          className={`flex items-center gap-3 border bg-white p-3 rounded-xl transition-colors ${
            error
              ? "border-red-500"
              : "border-slate-200 focus-within:border-brand-navy"
          } ${className}`}
        >
          <Icon size={18} className="text-slate-400 shrink-0" />
          <input
            ref={ref}
            className="bg-transparent placeholder-slate-400 text-brand-navy outline-none w-full font-nunito text-sm"
            {...props}
          />
        </div>
        {error && (
          <span className="text-xs text-red-500 ml-1">{error.message}</span>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";

export default FormField;