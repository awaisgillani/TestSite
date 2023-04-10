 
import { Component } from '@angular/core'; 
const faqs = [
  {id: 1, question:'I need someone to write my essay for me, who can help me?', answer:'1 - Unfortunately, we don’t write essays for free. However, we do provide free samples of previous essays we have written. Be very careful of someone who is promising you an essay for “free”. You get what you pay for. Nothing is free and if it is free then you might end with a low-quality essay.We offer reasonably priced services so that students can get quality writing help within their budget.'},
  {id: 2, question:'What you should not write in a college essay?', answer:'2 - Unfortunately, we don’t write essays for free. However, we do provide free samples of previous essays we have written. Be very careful of someone who is promising you an essay for “free”. You get what you pay for. Nothing is free and if it is free then you might end with a low-quality essay.We offer reasonably priced services so that students can get quality writing help within their budget.'},
  {id: 3, question:'Can you write my essay for free?', answer:'3 - Unfortunately, we don’t write essays for free. However, we do provide free samples of previous essays we have written. Be very careful of someone who is promising you an essay for “free”. You get what you pay for. Nothing is free and if it is free then you might end with a low-quality essay.We offer reasonably priced services so that students can get quality writing help within their budget.'}
  
];
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'] 
})

export class FaqComponent {
  faqdata=faqs 
}
