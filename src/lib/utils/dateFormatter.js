// Format date for display
export function formatDate(date) {
  const now = new Date();
  const taskDate = new Date(date);
  const diffTime = Math.abs(now - taskDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "Today";
  } else if (diffDays === 1) {
    return "Yesterday";
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else {
    return taskDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }
}

export function getPriorityColor(priority) {
  const colors = {
    high: "#ff3e00",
    medium: "#ffb300",
    low: "#40b3ff",
  };
  return colors[priority] || "#40b3ff";
}

export function getCategoryColor(category) {
  const colors = {
    work: "#ff3e00",
    personal: "#40b3ff",
    shopping: "#676778",
    health: "#4caf50",
    education: "#9c27b0",
  };
  return colors[category] || "#666";
}
