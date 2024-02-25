const SubmitButton = ({ title, isDirty, isValid, isSubmitting, onClick }) => {
  return (
    <button
      disabled={!isDirty || !isValid || isSubmitting}
      className="btn btn-wide btn-sm btn-primary"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
export default SubmitButton