export async function fetchUsers() {
    try {
        const response = await fetch("https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json");
        return await response.json();
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}
