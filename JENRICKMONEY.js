//This is JS

// JavaScript for collapsible sections
// Helper function to toggle collapse state
function toggleCollapse(toggleId, contentId, iconId) {
	const toggle = document.getElementById(toggleId);
	const content = document.getElementById(contentId);
	const icon = document.getElementById(iconId);

	if (!toggle || !content || !icon) return;

	toggle.addEventListener('click', () => {
		if (content.style.maxHeight && content.style.maxHeight !== '0px') {
			// Collapse
			content.style.maxHeight = '0px';
			content.style.paddingTop = '0';
			content.style.paddingBottom = '0';
			icon.classList.add('rotate-180');
		} else {
			// Expand
			// Set height to scrollHeight for smooth transition
			content.style.maxHeight = content.scrollHeight + 'px';
			content.style.paddingTop = '1rem'; // Restore padding (p-4 = 1rem)
			content.style.paddingBottom = '1rem'; // Restore padding
			icon.classList.remove('rotate-180');

			// Remove maxHeight after transition to allow content resizing
			setTimeout(() => {
				if (content.style.maxHeight !== '0px') {
					content.style.maxHeight = null;
				}
			}, 300); // Should match transition duration
		}
	});

	// Initial setup for the content div to handle CSS transitions
	content.style.overflow = 'hidden';
	content.style.transition = 'max-height 0.3s ease-out, padding 0.3s ease-out';
}

window.onload = function() {
	// Apply collapse logic to all sections
	toggleCollapse('earnings-toggle', 'earnings-content', 'earnings-icon');
	toggleCollapse('deductions-toggle', 'deductions-content', 'deductions-icon');
	toggleCollapse('leave-toggle', 'leave-content', 'leave-icon');

	// Initial state: ensure all sections are expanded by default for better user experience.
	// Simulate clicks to set the initial expanded state correctly
	document.getElementById('earnings-toggle').click();
	document.getElementById('deductions-toggle').click();
	document.getElementById('leave-toggle').click();
};
