# Creating the Project

The project was created using the Next.js App Router with JavaScript.

## Step 1: Create a Next.js Application

```bash
npx create-next-app@latest auth-app
```

During setup, choose the following options:

```text
✔ What is your project named? › auth-app
✔ Would you like to use TypeScript? › No
✔ Would you like to use ESLint? › Yes
✔ Would you like to use Tailwind CSS? › Yes (Optional)
✔ Would you like your code inside a src/ directory? › Yes
✔ Would you like to use App Router? › Yes
✔ Would you like to use Turbopack? › No
✔ Would you like to customize the import alias? › Yes
```

Navigate into the project.

```bash
cd auth-app
```

---

# Install Dependencies

Install all required packages.

```bash
npm install @supabase/supabase-js
```

Swagger packages

```bash
npm install swagger-ui-express express yamljs
```

(Optional)

```bash
npm install dotenv
```

---

# Environment Variables

Create a file named

```text
.env.local
```

Add the following values.

```env
SUPABASE_URL=your_project_url
SUPABASE_KEY=your_supabase_anon_key
PORT=3000
```

---

# Configure Supabase Client

Create

```
src/app/lib/supabase.js
```

```javascript
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

export default supabase;
```

---

# Verify Supabase Connection

Create a temporary route.

```
GET /info
```

Example

```javascript
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        success: true,
        message: "Supabase connection is working."
    });
}
```

Run the application.

```bash
npm run dev
```

Visit

```
http://localhost:3000/info
```

If the message is displayed, the project has been configured successfully.

---

# Supabase Project Setup

1. Create a project on Supabase.
2. Go to **Authentication → Providers**.
3. Enable **Email Authentication**.
4. Enable **Password Authentication**.
5. (Optional) Disable **Email Confirmation** for testing.
6. Copy:
   - Project URL
   - Anon Public Key
7. Paste them into `.env.local`.

---

# Run the Project

Development Server

```bash
npm run dev
```

Swagger Documentation

```bash
npm run swagger
```

Open in the browser

Application

```
http://localhost:3000
```

Swagger

```
http://localhost:3000/docs
```