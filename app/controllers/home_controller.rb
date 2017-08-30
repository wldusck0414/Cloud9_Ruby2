class HomeController < ApplicationController
    def index
        lottoballs = Array(1..45)
        pickedball = lottoballs.sample(6).uniq
        final_lottoballs = pickedball.sort{|a,b|a<=>b}
        
        @lottoball1 = final_lottoballs[0]
        @lottoball2 = final_lottoballs[1]
        @lottoball3 = final_lottoballs[2]
        @lottoball4 = final_lottoballs[3]
        @lottoball5 = final_lottoballs[4]
        @lottoball6 = final_lottoballs[5]
    end 
end
