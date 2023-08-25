import Image from "next/image";

import image1 from "@/assets/tree-736885-1280.jpg";
import image2 from "@/assets/Sea bath.jpg";
import Categories from "@/components/HomePage/categories";
import PopularProducts from "@/components/HomePage/PopularProducts";
import { Suspense } from "react";

export const revalidate = 1;

const HomePage = () => {
  return (
    <main>
      <h1>Site HomePage</h1>

      <Categories />
      <Suspense
        fallback={
          <h1 className="text-center text-2xl font-semibold text-red-500">Suspence Loading</h1>
        }
      >
        <PopularProducts />
      </Suspense>



      {/* <Image src={image2} alt="" placeholder="blur" /> */}

      {/* <Image width={640} height={400} alt="" src="/tree-736885-1280.jpg" placeholder="blur" blurDataURL="data:image/webp;base64,UklGRsoEAABXRUJQVlA4WAoAAAAgAAAAlgEA/QAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg3AIAADApAJ0BKpcB/gA+7WqvVamko6Mh8LnZMB2JaW7gCfQSgv+HyqlXov7ACUfveJUZJjdRekmue6Q2WsrHc4rXQSmEJWbWcHfNHucoS0Sl/7efi/EvthbDGiEJsj05jd4/l2r9FGqLuh2ZS74W9iE2aTsEkl2EnyTYJL/2qhnDr8X5nhjQ8VZ4TDSfda7bSr4eG6e5epz4rS9PjX5vkAsAZjTE6zaeYw+QC2LoHhg+ZYW4fXH+hw8eQ3RXYJLF6c/ZzF/2ryVzBfXiXFa8ldNsOECGtev030h68ln9DtsS/HarMD+8ZDAA9c51Ja0Er15VNscLDBTn7OFMONNzzuCaFrhm69nKbbswEuA4ZLhAhrYcZXnXnmAjYBaLFdKtJNYEI4Dmpwm8V5fOvPMoAcpdIxQ8m+vksy1q4lYP7FijKTrcV5IF3Z5/4kyr/73iQ/DJUWEAAP7wU5IU8yk45lVCKhfxSw3GI5oXgoQS0kfKCNOdAzQdrmvJ2EcoTBNbn3w6EIX24T18OT/+JPuZ+FFnd3/JsWJ+toXcJGeAC2iFiFDfbwLgpAsq01KWeCNHMt/Q1jPE3yj3suCu+dAeucRMx920AsvR7QtYjmz7/UhF/JCv6UntyLsfwj3Jbrq3T+UulswAj9bFb6V3B7N+w7LslyStUhoqGZNgK1fsIiW9TgNvDt0bwa0A9JeDoLiw0V7TlTtwGzUVillCvOKqNJxt69IBGCuEjOgcuduqPMlpqAXkQwAFh4WRNi4t18Yg2oohYC9dIFWQLFVg6jKFQ+wEmhLEJJeoERzcSb5XP4H6dUWjJ1Myz2wHR/Kq6Iqmta+sMd1ZnzUuRNvkZ/5rD8UwG5xuHvA4KWTMBug2daB/pCn7N4SG9szMP7lfEcvqIiLJjGv3/50rfVJ4/AmaGg28cmEnwl43VVO3laZnwahJQItgVxMz7JdpQF+0AABCTL27oKg17lwACJQh6AAAAA==" /> */}

      {/* <Image width={640} height={400} alt="" src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" placeholder="blur" blurDataURL="" /> */}
    </main>
  );
};

export default HomePage;
